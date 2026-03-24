import fs from "fs/promises"
import path from "path"
import { createSign } from "node:crypto"

const GOOGLE_SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets"
const SPREADSHEET_ID = "1W8lvFAr7V25HIm4V7whQ2Ww8vRZ0drGqQAO1kGg88Rc"
const SHEET_RANGE = "Sheet1!A:D"
const SITE_URL = "https://www.awwtomation.com"

interface GoogleServiceAccountCredentials {
  client_email: string
  private_key: string
  token_uri: string
}

export interface EmailMarketingLeadSubmission {
  email: string
  pageSlug: string
  postTitle: string
}

function toBase64Url(value: string | Buffer) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "")
}

async function readCredentials(): Promise<GoogleServiceAccountCredentials> {
  const jsonFromEnv = process.env.GOOGLE_SERVICE_ACCOUNT_JSON

  if (jsonFromEnv) {
    const parsed = JSON.parse(jsonFromEnv) as Partial<GoogleServiceAccountCredentials>

    if (parsed.client_email && parsed.private_key && parsed.token_uri) {
      return {
        client_email: parsed.client_email,
        private_key: parsed.private_key.replace(/\\n/g, "\n"),
        token_uri: parsed.token_uri,
      }
    }
  }

  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
  const tokenUri = process.env.GOOGLE_TOKEN_URI

  if (clientEmail && privateKey && tokenUri) {
    return {
      client_email: clientEmail,
      private_key: privateKey.replace(/\\n/g, "\n"),
      token_uri: tokenUri,
    }
  }

  const credentialsPath = path.join(process.cwd(), "credentials.json")
  const file = await fs.readFile(credentialsPath, "utf8")
  const credentials = JSON.parse(file) as Partial<GoogleServiceAccountCredentials>

  if (!credentials.client_email || !credentials.private_key || !credentials.token_uri) {
    throw new Error("Google service account credentials are incomplete.")
  }

  return {
    client_email: credentials.client_email,
    private_key: credentials.private_key.replace(/\\n/g, "\n"),
    token_uri: credentials.token_uri,
  }
}

async function getAccessToken(credentials: GoogleServiceAccountCredentials) {
  const issuedAt = Math.floor(Date.now() / 1000)
  const expiresAt = issuedAt + 3600
  const header = { alg: "RS256", typ: "JWT" }
  const payload = {
    iss: credentials.client_email,
    scope: GOOGLE_SHEETS_SCOPE,
    aud: credentials.token_uri,
    exp: expiresAt,
    iat: issuedAt,
  }

  const encodedHeader = toBase64Url(JSON.stringify(header))
  const encodedPayload = toBase64Url(JSON.stringify(payload))
  const unsignedToken = `${encodedHeader}.${encodedPayload}`
  const signer = createSign("RSA-SHA256")

  signer.update(unsignedToken)
  signer.end()

  const signature = signer
    .sign(credentials.private_key, "base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "")

  const assertion = `${unsignedToken}.${signature}`
  const response = await fetch(credentials.token_uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Unable to retrieve Google access token: ${errorText}`)
  }

  const data = (await response.json()) as { access_token?: string }

  if (!data.access_token) {
    throw new Error("Google access token response did not include an access token.")
  }

  return data.access_token
}

export async function appendEmailMarketingLead({
  email,
  pageSlug,
  postTitle,
}: EmailMarketingLeadSubmission) {
  const credentials = await readCredentials()
  const accessToken = await getAccessToken(credentials)
  const pageUrl = `${SITE_URL}/blog/${pageSlug}`
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(SHEET_RANGE)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[new Date().toISOString(), email, postTitle, pageUrl]],
      }),
    },
  )

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Unable to append lead to Google Sheets: ${errorText}`)
  }
}
