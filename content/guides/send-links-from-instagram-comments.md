---
title: "Send links from Instagram comments automatically"
description: "Set up comment-to-DM on Instagram so anyone who comments a keyword gets your link in their DMs within seconds, plus a public reply under their comment."
date: "2026-09-29"
color: "#fb0df7"
art: comment-to-dm
category: comments
platform: instagram
order: 1
---

"Comment LINK and I'll send it to you" is the easiest call to action on Instagram. Here's how to send that link automatically, with a reply under the comment so everyone can see it works.

## What you need

- An Instagram **Business** or **Creator** account, connected on the dashboard
- An Awwtomation account (build now, pick a plan when you go live)

## Steps

### Open the templates

Go to **Automations** and click **Browse templates**.

![The Automations list with Browse templates highlighted](/how-to/send-links-from-instagram-comments/1-browse-templates.webp "app.awwtomation.com/automations")

### Pick Auto-DM links from comments

Click the **Auto-DM links from comments** card. It's created as a draft on your Instagram account and opens in the builder. If you have more than one Instagram account, pick it under **Which account?** first.

![The template gallery with Auto-DM links from comments highlighted](/how-to/send-links-from-instagram-comments/2-template.webp "app.awwtomation.com/automations")

### Set your keywords

Click the yellow trigger, **When someone comments**. Under **Keywords**, type each word in **Run on** and press Enter: `link`, `shop` and any misspelling people use. **Contains** catches the word anywhere in a comment.

![The trigger settings with link and shop as keywords](/how-to/send-links-from-instagram-comments/3-keywords.webp "app.awwtomation.com/automations")

### Choose the posts

Under **Posts**, choose **Specific posts** to run it only on certain reels, tick them in **Choose posts** and click **Done**. Leave **All posts** to run it everywhere.

![The Choose posts dialog with two posts selected](/how-to/send-links-from-instagram-comments/4-choose-posts.webp "app.awwtomation.com/automations")

![The Posts section showing the two chosen posts](/how-to/send-links-from-instagram-comments/4b-posts.webp "app.awwtomation.com/automations")

### Write the DM and its button

Click the **Send message** step. Write a short message, then give the button a title (up to 20 characters) and your link. The phone on the right shows the DM as they'll see it.

![The Send message settings with a Shop the drop button](/how-to/send-links-from-instagram-comments/5-message.webp "app.awwtomation.com/automations")

### Add a public reply

Back in the trigger, scroll to **Reply under the comment** and switch on **Post a public reply**. Add two or three variations with **Add a variation**: one is picked at random each time, so your replies don't all look the same.

![Reply under the comment with three public reply variations](/how-to/send-links-from-instagram-comments/6-public-reply.webp "app.awwtomation.com/automations")

### Test it

Click **Test**, type a sample comment and click **Run test**. You'll see the keyword it matched and the DM it would send. Nothing is sent.

![The Test it dialog: It runs, matched keyword shop](/how-to/send-links-from-instagram-comments/7-test.webp "app.awwtomation.com/automations")

### Go live

Click **Go live**. Then tell people in the video and the caption: "Comment LINK and I'll send it to you."

![The builder with Go live highlighted](/how-to/send-links-from-instagram-comments/8-go-live.webp "app.awwtomation.com/automations")

## Tips

- Keep the keyword short and obvious, and say it out loud in the video, not only in the caption.
- Use **Never run on** for words that shouldn't trigger it, like `spam`.
- Check **Logs** if a DM didn't go out: every skip has a plain-English reason.

## Q: How fast does the DM arrive?

A: Usually within a few seconds. On very busy posts, messages queue to stay under Meta's limit of 750 private replies an hour.

## Q: Can someone get the link twice?

A: Not by default. **Repeats, Once per person** is on, so anyone who already got it is skipped. Switch it off in the trigger if you want every comment answered.
