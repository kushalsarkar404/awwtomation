"use server"

export async function sendMessageToMake(formData: FormData) {
  try {
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const number = formData.get("number")
    const businessName = formData.get("businessName")
    const message = formData.get("message")

    // Validate form data
    if (!firstName || !lastName || !number || !businessName || !message || !email) {
      return {
        success: false,
        error: "All fields are required",
      }
    }

    // Get the webhook URL from environment variables
    const webhookUrl = "https://hook.eu2.make.com/63ygccw4xa914ky2ki62i5td9wttitcg"

    if (!webhookUrl) {
      console.error("MAKE_WEBHOOK_URL environment variable is not set")
      return {
        success: false,
        error: "Server configuration error",
      }
    }

    // Prepare the data to send to Make.com
    const data = {
      firstName,
      lastName,
      email,
      number,
      businessName,
      message,
      timestamp: new Date().toISOString(),
      type: 'Contact Form'
    }

    // Send the data to Make.com
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`Failed to send data to Make.com: ${response.statusText}`)
    }

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error sending message to Make.com:", error)
    return {
      success: false,
      error: "Failed to send message",
    }
  }
}
