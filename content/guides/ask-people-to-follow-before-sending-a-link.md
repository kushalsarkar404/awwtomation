---
title: "Ask people to follow before sending a link"
description: "Use a follow gate to send your freebie only to followers, with a friendly follow request and an I'm following button for everyone else."
date: "2026-09-29"
color: "#96dae3"
art: follow-gate
category: comments
platform: instagram
order: 2
---

When a reel reaches people who don't follow you yet, a follow gate turns that reach into followers. Followers get the link straight away; everyone else is asked to follow first.

## Steps

### Pick Follow first, then freebie

Open **Automations**, click **Browse templates** and filter by **Grow your followers**. Click **Follow first, then freebie**.

![The template gallery filtered to Grow your followers](/how-to/ask-people-to-follow-before-sending-a-link/1-template.webp "app.awwtomation.com/automations")

### See how the flow works

The comment goes to a **Follow gate** that checks whether they follow you. **Following** carries on to a tag and the freebie. **Not following** is left empty on purpose: that's what sends the follow request.

![The flow: comment trigger, Follow gate, Add tag and Send message](/how-to/ask-people-to-follow-before-sending-a-link/2-flow.webp "app.awwtomation.com/automations")

### Set the keyword

Click the trigger and set the words people will comment, like `guide` or `free`. Choose **Specific posts** if it's for one reel.

![The trigger with free, guide and freebie as keywords](/how-to/ask-people-to-follow-before-sending-a-link/3-keywords.webp "app.awwtomation.com/automations")

### Write the follow request

Click the **Follow gate** step and write one friendly line in **Ask them to follow**. It's sent with an **I'm following** button while nothing is connected to **Not following**. The preview shows exactly what non-followers see.

![The Follow gate settings with the follow request and its preview](/how-to/ask-people-to-follow-before-sending-a-link/4-follow-gate.webp "app.awwtomation.com/automations")

### Write the reward

Click the **Send message** step at the end of the **Following** branch. Thank them and add the button with your link.

![The Send message step with a Get the guide button](/how-to/ask-people-to-follow-before-sending-a-link/5-message.webp "app.awwtomation.com/automations")

### Test and go live

Click **Test** to try a comment. The result lists every step, with the follow check assumed to pass. Then click **Go live** and tell people: "Follow and comment GUIDE."

![The Test it dialog running the follow check, the tag and the DM](/how-to/ask-people-to-follow-before-sending-a-link/6-test.webp "app.awwtomation.com/automations")

![The builder with Go live highlighted](/how-to/ask-people-to-follow-before-sending-a-link/7-go-live.webp "app.awwtomation.com/automations")

## How the check works

When someone comments, Awwtomation asks Instagram whether they follow you. Followers get the link at once. Everyone else gets your request and the **I'm following** button; tapping it runs the check again, and the link follows as soon as they do.

## Q: Is this allowed on Instagram?

A: Yes. Checking follow status through Meta's API and asking people to follow is allowed. Keep the reward worth the follow.

## Q: Does it work on Facebook Pages?

A: No. The follow gate is for Instagram only, so it isn't offered on Facebook Page automations.
