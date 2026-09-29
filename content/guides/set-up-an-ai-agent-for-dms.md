---
title: "Set up an AI agent to answer DMs"
description: "Create an AI agent that answers Instagram and Messenger DMs in your own words, test it in the chat, then put it to work with the AI reply step."
date: "2026-09-29"
color: "#fff200"
art: ai
category: messages
platform: both
order: 3
---

Keyword replies cover the questions you expect. An AI agent covers the rest: it answers from what you tell it, in your tone, and hands the chat to your team when it shouldn't decide.

## What you need

- **Pro** or **Agency** to use the built-in model, with no API key needed
- On **Starter**, a key from an AI provider such as OpenAI, Anthropic or Google

## Steps

### Create an agent

Open **AI** and click **Create agent**. Your first agent is called **Front desk** and comes with starter instructions and rules you can keep or rewrite.

![The AI page with the Create agent button](/how-to/set-up-an-ai-agent-for-dms/1-create-agent.webp "app.awwtomation.com/ai")

![A new agent called Front desk with its starter instructions](/how-to/set-up-an-ai-agent-for-dms/2-editor.webp "app.awwtomation.com/ai")

### Tell it what it knows

Fill in the three boxes on the right. **Instructions** say who it is and how it sounds. **Knowledge** holds the facts: prices, sizes, delivery charges, returns. **Rules** are the lines it must never cross. The agent only states facts that are written here.

![The Instructions, Knowledge and Rules boxes filled in for a clothing shop](/how-to/set-up-an-ai-agent-for-dms/3-knowledge.webp "app.awwtomation.com/ai")

### Pick the model and add link buttons

Under **Model**, **Awwtomation AI** needs no key. Add up to three **Link buttons**: the agent can offer them in a reply, and it can't send any other link. **If the model fails** is the reply sent when the model doesn't answer.

![The Model picker set to Awwtomation AI and a Shop the collection link button](/how-to/set-up-an-ai-agent-for-dms/4-model-buttons.webp "app.awwtomation.com/ai")

### Save and try it

Click **Save**, then message it in **Test chat** the way a customer would. Change the knowledge, save and ask again until the answers are right.

![The test chat answering a question about delivery to Pokhara](/how-to/set-up-an-ai-agent-for-dms/5-test-chat.webp "app.awwtomation.com/ai")

### Use Let AI handle the conversation

In **Automations**, click **Browse templates** and pick **Let AI handle the conversation**. It answers any DM with your agent.

![The template gallery with Let AI handle the conversation highlighted](/how-to/set-up-an-ai-agent-for-dms/6-template.webp "app.awwtomation.com/automations")

### Set up the AI reply step

Click the **AI reply** step. Pick the **Agent**, say what it should do here in **What it should do here**, and set **Replies before moving on**. **Done** carries on when the chat is finished; **Needs a human** tags the chat and tells the person someone will reply.

![The AI reply step with the Front desk agent picked](/how-to/set-up-an-ai-agent-for-dms/7-ai-step.webp "app.awwtomation.com/automations")

### Go live

Click **Go live**. Chats the agent hands over show up in the **Inbox** for your team.

![The builder with Go live highlighted](/how-to/set-up-an-ai-agent-for-dms/8-go-live.webp "app.awwtomation.com/automations")

## What the agent will and won't do

- It replies in English or Romanised Nepali, in short plain messages.
- It only uses facts from your instructions and knowledge, and never invents a price or a promise.
- It only shares links from your link buttons.
- It hands over to a person when it can't help, and your team picks the chat up in the inbox.

## Q: Do I need an API key?

A: Not on Pro or Agency: the built-in Awwtomation AI is included, with 3,000 replies a month on Pro and 15,000 on Agency. Starter agents use your own key.

## Q: Can I use it on comments?

A: Yes. The **Answer comment questions with AI** template answers a question under a post in the DM, written by your agent.
