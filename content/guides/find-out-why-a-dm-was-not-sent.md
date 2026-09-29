---
title: "Find out why a DM was not sent"
description: "Use Logs to see every DM, public reply and broadcast Awwtomation sent or skipped, with a plain-English reason for each one that didn't go out."
date: "2026-09-29"
color: "#edf2ee"
art: logs
category: team
platform: both
order: 3
---

Someone says they commented and got nothing? Logs show exactly what happened, message by message, in plain English.

## Steps

### Start from the dashboard

When messages fail, **Needs attention** on the **Dashboard** says how many. Click **Review** to open them in Logs.

![The dashboard with 7 DMs failed to send under Needs attention](/how-to/find-out-why-a-dm-was-not-sent/1-needs-attention.webp "app.awwtomation.com/dashboard")

### Open Logs

**Logs** lists every DM, comment reply and broadcast message, newest first, with its status, the person, the type and which automation sent it. Search by @username to find one person.

![The Logs page listing sent and failed messages](/how-to/find-out-why-a-dm-was-not-sent/2-logs.webp "app.awwtomation.com/logs")

### Filter by status

Click the filter and pick a status to see only those rows, like **Failed** or **Already sent**. Each one shows how many there are.

![The Status filter with counts for each status](/how-to/find-out-why-a-dm-was-not-sent/3-status-filter.webp "app.awwtomation.com/logs")

### Open a row

Click a row to see **What went wrong** (or **Why it wasn't sent**) with the full message, the time, the account and the automation.

![A failed message opened, explaining the person hasn't messaged in 24 hours](/how-to/find-out-why-a-dm-was-not-sent/4-why.webp "app.awwtomation.com/logs")

### Look up a status

Click **Why not sent?** for a short guide to every status.

![The Why not sent guide listing every status](/how-to/find-out-why-a-dm-was-not-sent/5-why-not-sent.webp "app.awwtomation.com/logs")

## The reasons you'll see most

| Status | What it means |
|---|---|
| Already sent | This comment, or this person, already got a reply (**Once per person** is on). |
| Over 24 hours | You can only message someone within 24 hours of their last message. |
| Not following | They weren't following yet, so they got the follow prompt instead. |
| Too many at once | Instagram limits how many DMs go out each hour, and this one was over. |
| Daily limit per person | This person already got 50 automated DMs today. It stops two bots answering each other forever. |
| Own account | It came from your own account. |
| Opted out | They asked not to get messages. |
| Failed | Instagram or Messenger refused it. Open the row to see why. |

## Q: Can I export the logs?

A: Yes. Click **Export CSV** to download what's on screen with your filters.

## Q: How do I test without a second account?

A: Use **Test** in the automation builder: it checks your keywords and shows the DM without sending anything.
