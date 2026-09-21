import Link from "next/link"

import { LegalPage } from "@/components/site/legal-page"
import { APP_URL, brand } from "@/lib/brand"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Data Deletion Instructions",
  description:
    "How to delete the data Awwtomation stores about your account, your connected Instagram and Facebook channels, or your audience.",
  path: "/legal/data-deletion",
})

/**
 * Ported from the product app's /data-deletion page, where every sentence is
 * checked against lib/services/channels.ts. Keep the two in step.
 *
 * The app version also looks up a Meta deletion confirmation code in the
 * database. That needs the app's database, so here it is a link across.
 */
const UPDATED = "September 7, 2026"

export default function DataDeletionPage() {
  return (
    <LegalPage
      title="Data Deletion Instructions"
      description={`You can remove the data ${brand.name} stores about your account, your connected channels or your audience at any time. This page explains every route and exactly what each one deletes.`}
      updated={UPDATED}
    >
      <p>
        Have a confirmation code from Meta?{" "}
        <a href={`${APP_URL}/data-deletion`}>Check the status of your deletion request</a>.
      </p>

      <h2>1. Disconnect a channel (keeps data for reconnection)</h2>
      <p>Admins and owners can disconnect an Instagram account or Facebook Page from inside {brand.name}:</p>
      <ol>
        <li>Sign in and open <strong>Channels</strong> in the sidebar.</li>
        <li>Open the menu on the account card and choose <strong>Disconnect</strong>, then confirm.</li>
      </ol>
      <p>
        Disconnecting destroys the stored access token immediately, asks Meta to stop sending webhooks for a Facebook
        Page (Instagram has no equivalent, so its events are discarded on arrival), and stops all processing for that
        account: incoming comments and messages are ignored and automations on it no longer fire. The channel&apos;s contacts, conversations, messages, automations, cached posts and delivery logs are
        <strong> kept</strong> so that reconnecting the same account later restores the workspace exactly as it was. If
        you want that data gone, use the next option.
      </p>

      <h2>2. Delete a channel and all of its data (permanent)</h2>
      <p>An owner can permanently erase everything an account ever produced in the workspace:</p>
      <ol>
        <li>Open <strong>Channels</strong>, open the menu on the account card and choose <strong>Delete account and data</strong>.</li>
        <li>Type the account&apos;s username (or the Page name) to confirm.</li>
      </ol>
      <p>
        This deletes the channel record and its access token, every contact and conversation on that account
        (including all messages), the automations built on it and their flow sessions and tracked links, broadcasts
        sent from it, delivery logs, cached posts, and any queued background jobs for the account. We also delete the
        raw webhook receipts we keep for de-duplicating Meta&apos;s deliveries wherever they reference the account or
        one of its posts. The deletion runs immediately and cannot be undone. The only trace that remains is an audit
        entry in your workspace stating that the channel was deleted, when, by whom, and how many records it contained.
      </p>

      <h2>3. Delete a workspace or an organization</h2>
      <p>
        An owner can delete a workspace from <strong>Settings → General</strong> (Ownership and deletion). This removes
        every channel in it with all the data listed in section 2, plus its pipelines, tracked links, logs, queued jobs
        and the workspace&apos;s audit log. Connected accounts are released so they can be connected elsewhere.
      </p>
      <p>
        Deleting the organization, from the same place, removes all of its workspaces in the same way, plus team
        memberships, pending invitations and payment history. Cancel a paid subscription first so nothing is charged
        again. To delete your user account as well, or if you can no longer sign in, email us (section 6).
      </p>

      <h2>4. Remove {brand.name} from your Instagram or Facebook settings</h2>
      <p>
        You can revoke {brand.name}&apos;s access directly on Meta&apos;s side. On Facebook go to{" "}
        <strong>Settings &amp; privacy → Settings → Business integrations</strong> and remove {brand.name}; on Instagram
        go to <strong>Settings → Website permissions → Apps and websites</strong> and remove {brand.name}.
      </p>
      <p>
        Meta then sends us a deauthorization callback. For every account we can match to it we do exactly what
        section 1 describes: the token is destroyed at once and processing stops, while the workspace&apos;s data is
        kept until an owner deletes it (sections 2, 3 or 5) or asks us to (section 6). For Facebook Pages, Meta
        identifies the <em>person</em> who removed the app rather than the Page, which we cannot always map to a
        connected Page; in that case the Page token simply stops working on its next use and the account shows as
        &quot;Reconnect needed&quot; until someone in the workspace disconnects or deletes it.
      </p>

      <h2>5. Meta&apos;s data deletion request</h2>
      <p>
        If you use Facebook&apos;s <strong>&quot;Delete your information&quot;</strong> (send request) for {brand.name},
        Meta calls our data deletion callback. We immediately and permanently delete every connected account matched to
        your Meta user id, with the full scope described in section 2, in whichever workspace holds it. Meta shows you a
        confirmation code and a link back to this page; opening that link displays whether the request completed and
        how many accounts were deleted. The same Facebook Page matching limitation from section 4 applies.
      </p>

      <h2>6. Request deletion by email</h2>
      <p>
        For anything the options above do not cover, such as deleting your user account, removing data when you cannot
        sign in, or requests from people who interacted with a business that uses {brand.name}, email{" "}
        <a href={`mailto:${brand.supportEmail}?subject=Data%20deletion%20request`}>{brand.supportEmail}</a> with the
        subject &quot;Data deletion request&quot;. Tell us what you want deleted: a specific channel, a workspace, an organization, your
        whole account, or, if you are a member of someone else&apos;s audience, the Instagram or Facebook username the
        data relates to.
      </p>
      <p>
        We verify the request, complete the deletion within 30 days and confirm by email. If you are asking us to
        remove data held in another customer&apos;s workspace, we may also forward the request to that customer, who is
        the controller of that data.
      </p>

      <h2>7. What remains after deletion</h2>
      <ul>
        <li>
          Audit entries that record that a deletion happened (timestamp, actor, account id and record counts). These
          never include message content or contact details.
        </li>
        <li>Invoices, payment records and payment-provider receipts we are legally required to keep for accounting.</li>
        <li>Aggregated, anonymised statistics that cannot identify anyone.</li>
        <li>
          Copies inside our hosting provider&apos;s database backups, which roll off on the provider&apos;s retention
          schedule. Deleted data is never restored from a backup except to recover from a platform-wide failure.
        </li>
      </ul>

      <h2>8. Questions</h2>
      <p>
        See our <Link href="/legal/privacy-policy">Privacy Policy</Link> for how we handle data generally, or contact{" "}
        <a href={`mailto:${brand.supportEmail}`}>{brand.supportEmail}</a>.
      </p>
    </LegalPage>
  )
}
