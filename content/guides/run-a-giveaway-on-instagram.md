---
title: "Run a giveaway on Instagram"
description: "Turn every comment into a giveaway entry: check entrants follow you, tag each one, confirm the entry by DM and find everyone who entered in Contacts."
date: "2026-09-29"
color: "#ff4c00"
art: giveaway
category: comments
platform: instagram
order: 3
---

A giveaway gets hundreds of comments in a day. Awwtomation answers every one, checks the follow, and keeps a tidy list of entrants for the draw.

## Steps

### Pick Run a giveaway

In **Automations**, click **Browse templates**, filter by **Engage your audience** and click **Run a giveaway**.

![The template gallery with Run a giveaway highlighted](/how-to/run-a-giveaway-on-instagram/1-template.webp "app.awwtomation.com/automations")

### See the flow

Any comment goes to a **Follow gate**. Followers are tagged `giveaway` and get a confirmation. People who don't follow yet are asked to follow first.

![The giveaway flow: comment, Follow gate, Add tag, Send message](/how-to/run-a-giveaway-on-instagram/2-flow.webp "app.awwtomation.com/automations")

### Let every comment count

Click the trigger. The template uses **Any text**, so every comment on the post is an entry. No keyword to remember.

![The trigger set to Any text](/how-to/run-a-giveaway-on-instagram/3-any-text.webp "app.awwtomation.com/automations")

### Choose the giveaway post

Under **Posts**, pick **Specific posts** and tick only your giveaway post, so comments on other posts aren't counted.

![The Choose posts dialog with the giveaway post ticked](/how-to/run-a-giveaway-on-instagram/4-choose-post.webp "app.awwtomation.com/automations")

### Ask entrants to follow

Click the **Follow gate** and write the request in **Ask them to follow**. It goes out with an **I'm following** button.

![The Follow gate settings for the giveaway](/how-to/run-a-giveaway-on-instagram/5-follow-gate.webp "app.awwtomation.com/automations")

### Tag everyone who enters

The **Add tag** step tags each entrant `giveaway`. Change it to something like `dashain-giveaway` if you run more than one.

![The Add tag step with the giveaway tag](/how-to/run-a-giveaway-on-instagram/6-tag.webp "app.awwtomation.com/automations")

### Confirm the entry

Click the **Send message** step and tell them they're in and when you'll announce the winner.

![The confirmation message for giveaway entrants](/how-to/run-a-giveaway-on-instagram/7-message.webp "app.awwtomation.com/automations")

### Go live

Click **Go live** before you post, so the first comments count too.

![The builder with Go live highlighted](/how-to/run-a-giveaway-on-instagram/8-go-live.webp "app.awwtomation.com/automations")

### See who entered

Open **Contacts** and filter by the `giveaway` tag, or pick the segment from **Segments**. Every entrant is there with their username.

![Contacts filtered to the Giveaway entrants segment](/how-to/run-a-giveaway-on-instagram/9-entrants.webp "app.awwtomation.com/contacts")

## After the giveaway

Pause the automation from the **Automations** list when entries close. Awwtomation doesn't draw the winner for you: export the tagged contacts to CSV from the **…** menu in Contacts and pick one.

## Q: Does a second comment count as a second entry?

A: No. **Once per person** is on, so each person is entered and messaged once, however often they comment.

## Q: Can I run a giveaway on a Facebook Page?

A: Yes, with the Messenger template of the same name. It tags every commenter and confirms in Messenger, without the follow check.
