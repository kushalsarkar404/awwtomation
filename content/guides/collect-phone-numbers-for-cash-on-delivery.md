---
title: "Collect phone numbers for cash on delivery"
description: "Ask for a phone number in the DM when someone wants to order, check it's a real Nepali mobile number and tag the order for your delivery team."
date: "2026-09-29"
color: "#007257"
art: collect-phone
category: leads
platform: both
order: 2
---

Cash on delivery orders need a number the rider can call. Ask for it in the chat, check it's real and hand your team a tidy list.

## Steps

### Start a DM automation

Click **+ New automation** in **Automations** and name it. In the trigger, pick **DM** (or **Message** on a Facebook Page) and add the words people use to order: `order`, `cod`, `cash on delivery`.

![A DM trigger with order, cod and cash on delivery as keywords](/how-to/collect-phone-numbers-for-cash-on-delivery/1-trigger.webp "app.awwtomation.com/automations")

### Ask for the number

Click **Ask a question** in the **Steps** list and write the question. Set **Save answer to** to **Phone**, and **Check the answer** switches to **Phone number**.

![The Ask a question step saving to Phone with the Phone number check](/how-to/collect-phone-numbers-for-cash-on-delivery/2-question.webp "app.awwtomation.com/automations")

### Confirm the order

Add a **Send message** step. Use `{{phone}}` to repeat the number back, so they can spot a mistake.

![A confirmation message that repeats the phone number](/how-to/collect-phone-numbers-for-cash-on-delivery/3-confirm.webp "app.awwtomation.com/automations")

### Tag it for your team

Add an **Add tag** step with a tag like `cod-order`. Your team filters **Contacts** by it to see who to call.

![An Add tag step with the cod-order tag](/how-to/collect-phone-numbers-for-cash-on-delivery/4-tag.webp "app.awwtomation.com/automations")

### Check the flow

The finished flow asks, confirms and tags, in that order.

![The finished flow: DM trigger, Ask a question, Send message and Add tag](/how-to/collect-phone-numbers-for-cash-on-delivery/5-flow.webp "app.awwtomation.com/automations")

### Test and go live

Click **Test** with a real order message, then **Go live**.

![The Test it dialog asking for the rider's number](/how-to/collect-phone-numbers-for-cash-on-delivery/6-test.webp "app.awwtomation.com/automations")

![The builder with Go live highlighted](/how-to/collect-phone-numbers-for-cash-on-delivery/7-go-live.webp "app.awwtomation.com/automations")

## Which numbers count

Nepali mobiles like 98XXXXXXXX or 97XXXXXXXX, with or without +977, and any number written with its country code. Anything else gets the retry prompt. Numbers and emails people type anywhere in a DM are saved on the contact too.

## Q: Where do I see the numbers?

A: On each contact under **Contacts**, and in the contact panel beside the chat in the **Inbox**.

## Q: Can I add the order to a pipeline?

A: Yes. Add an **Add to pipeline** step and pick a stage like "Ordering". See [tracking leads with pipelines](/how-to/track-leads-with-pipelines).
