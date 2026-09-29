---
title: "Connect Awwtomation to Claude or ChatGPT"
description: "Add Awwtomation to Claude, ChatGPT or another AI app with its MCP server URL, then ask about your automations, contacts and results in plain words."
date: "2026-09-29"
color: "#d8bee3"
art: mcp
category: team
platform: both
order: 5
---

Awwtomation has an MCP server, so AI apps like Claude, ChatGPT, Claude Code and Cursor can read your workspace and, if you allow it, make changes for you. There are no API keys to copy.

## Steps

### Copy your MCP server URL

Open the account menu, go to **Settings** and click the **MCP** tab. Click **Copy** next to **MCP server URL**.

![Settings, MCP, with the server URL and the Copy button](/how-to/connect-awwtomation-to-claude-or-chatgpt/1-mcp-url.webp "app.awwtomation.com/settings/mcp")

### Add it to your AI app

Paste the URL where your app adds a custom connector or MCP server. In Claude, that's a custom connector in its settings; in ChatGPT, a connector. The app registers itself, so there's nothing else to fill in.

### Allow access

Your AI app opens an Awwtomation page asking for permission. Tick the workspaces it can use and click **Allow**. It acts as you, with your role in each workspace.

![The permission page: Claude wants to use your Awwtomation](/how-to/connect-awwtomation-to-claude-or-chatgpt/3-consent.webp "app.awwtomation.com/oauth/authorize")

### See what it can do

Back in **Settings, MCP**, your app appears under **Your connected apps**, with **Disconnect** next to it. Below, every tool is listed by group with who can use it. Read tools are open to everyone in the workspace; tools that change things are for owners until an owner opens them up.

![MCP tools grouped by area, with the Automations group open](/how-to/connect-awwtomation-to-claude-or-chatgpt/2-tools.webp "app.awwtomation.com/settings/mcp")

## Things to ask

- "Which automation sent the most DMs this week?"
- "List contacts tagged wholesale who haven't been contacted."
- "Draft a comment-to-DM automation for my new reel."

## Q: Is it safe?

A: The app only gets the workspaces you tick, acts with your role, and you can disconnect it any time from **Settings, MCP**. Each person connects and disconnects their own apps.

## Q: Does it need an API key?

A: No. You approve the app on the permission page instead.
