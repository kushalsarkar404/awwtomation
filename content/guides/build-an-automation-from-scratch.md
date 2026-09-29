---
title: "Build an automation from scratch"
description: "Build a comment-to-DM automation step by step: set the trigger and keywords, add a message with a button, tag the contact, test it and go live."
date: "2026-09-29"
color: "#7b34ce"
art: flow
category: getting-started
platform: both
order: 2
---

Templates are the quickest start, but building one yourself shows how every automation fits together. This one sends a price list to anyone who comments PRICE.

## Steps

### Click New automation

Go to **Automations** and click **+ New automation**. A draft called "Untitled automation" opens on your first connected account.

![The Automations list with the New automation button](/how-to/build-an-automation-from-scratch/1-new-automation.webp "app.awwtomation.com/automations")

### Get to know the builder

The builder opens with the trigger selected and its settings on the left. The flow sits in the middle. The orange pill at the top counts what's still missing before it can go live. Click the name at the top to rename it.

![A new automation in the builder with the trigger settings open](/how-to/build-an-automation-from-scratch/2-blank.webp "app.awwtomation.com/automations")

### Set the trigger

Under **Starts when someone sends a**, pick **Comment**, **DM** or **Story reply**. Type each keyword in **Run on** and press Enter. **Contains** matches the word anywhere in the message, **Whole word** only on its own, and **Any text** runs on every message. Under **Posts**, keep **All posts** or choose **Specific posts**.

![The trigger settings with PRICE and kati as keywords](/how-to/build-an-automation-from-scratch/3-trigger.webp "app.awwtomation.com/automations")

### Add a Send message step

Click **Send message** in the **Steps** list. It's added under the last step and its settings open on the right. You can also click the **+** under any step, or drag a step onto the canvas.

![The Steps list with Send message highlighted](/how-to/build-an-automation-from-scratch/4-palette.webp "app.awwtomation.com/automations")

### Check what's left to fix

Click the orange pill (here **1 to fix**) to see everything under **Before it can go live**. Each problem is also marked on its step.

![The Before it can go live list: Message needs text or an image](/how-to/build-an-automation-from-scratch/5-to-fix.webp "app.awwtomation.com/automations")

### Write the message

Type the **Message text**. The chips under the box insert **@username**, **First name** or **Full name**. Click **Add button** for up to three buttons: a **Link** opens a web page and **Next step** carries on the flow. Titles fit 20 characters. The phone on the right shows what they'll see.

![The Send message settings with a price list message and a See prices button](/how-to/build-an-automation-from-scratch/6-message.webp "app.awwtomation.com/automations")

### Tag the contact

Click **Add tag** in the Steps list and type a tag, here `price-list`. Everyone who reaches this step gets the tag, so you can filter them in Contacts or message them later.

![An Add tag step that tags the contact price-list](/how-to/build-an-automation-from-scratch/7-tag.webp "app.awwtomation.com/automations")

### Test it

Click **Test**, type a sample comment and click **Run test**. You see whether it runs, which keyword matched and exactly what the DM looks like. Nothing is sent.

![The Test it dialog showing It runs, matched keyword PRICE](/how-to/build-an-automation-from-scratch/8-test.webp "app.awwtomation.com/automations")

### Go live

Click **Go live**. It saves your changes and switches the automation on. The badge next to the name changes from **Draft** to **Live**, and **Go live** becomes **Pause**.

![The builder with the Go live button highlighted](/how-to/build-an-automation-from-scratch/9-go-live.webp "app.awwtomation.com/automations")

![The same automation now Live, with an Automation is live message](/how-to/build-an-automation-from-scratch/10-live.webp "app.awwtomation.com/automations")

## How a flow moves

After each **Send message** the flow waits for the person to reply or tap a button, then carries on. That keeps every automation inside Meta's rules: one private reply per comment, and follow-up messages only within 24 hours of the person's last message.

## Q: Can I build without a plan?

A: Yes. You can connect accounts and build as many automations as you like first. Go live asks you to pick a plan before anything is sent.

## Q: What does Once per person do?

A: It's on by default under **Repeats** in the trigger. Anyone who already got this automation is skipped, even if they comment again.
