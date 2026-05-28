# 1TAM-MD WhatsApp Bot

> A powerful multi-device WhatsApp bot with AI Chat, built with Baileys.

---

## Quick Actions

[![Fork on GitHub](https://img.shields.io/badge/Fork_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername/1TAM-MD/fork)
[![Download ZIP](https://img.shields.io/badge/Download_ZIP-0078D4?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername/1TAM-MD/archive/refs/heads/main.zip)
[![Deploy to Heroku](https://img.shields.io/badge/Deploy_to_Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://heroku.com/deploy?template=https://github.com/yourusername/1TAM-MD)
[![Deploy to Railway](https://img.shields.io/badge/Deploy_to_Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app/new/template?template=https://github.com/yourusername/1TAM-MD)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 AI Chat | Chat with Gemini or GPT with memory |
| 👥 Group Management | Kick, add, promote, demote, mute, tagall |
| 🎨 Media | Stickers, TTS, YouTube downloader, memes |
| 🔍 Search | Wikipedia, weather, lyrics, translate, movies |
| 😂 Fun | Jokes, facts, 8ball, roast, ship, dice |
| 🔄 Auto Reconnect | Stays connected 24/7 |
| 🛡️ Anti-Spam | Built-in spam protection |
| 👋 Welcome/Farewell | Auto group messages |

---

## 🚀 Deploy to Heroku (Recommended)

### Step 1 — Get your SESSION_ID

Run locally once to generate your session:

```bash
# Clone this repo
git clone https://github.com/yourusername/1TAM-MD.git
cd 1TAM-MD

# Install dependencies
npm install

# Generate session (scan QR code once)
node getSession.js
```

Scan the QR code with WhatsApp → Copy the `SESSION_ID` that appears in the terminal.

### Step 2 — Deploy

Click the button below and paste your `SESSION_ID` when asked:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/yourusername/1TAM-MD)

**Required fields on Heroku:**
| Variable | Description |
|----------|-------------|
| `SESSION_ID` | From Step 1 above |
| `OWNER_NUMBER` | Your WhatsApp number (e.g. `2348012345678`) |
| `OWNER_NAME` | Your name |

**Optional (for AI Chat):**
| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Free key from [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) |

### Step 3 — Done!

Your bot is live. No QR scan needed on Heroku since it uses your SESSION_ID.

---

## 🔧 Local Setup

```bash
git clone https://github.com/yourusername/1TAM-MD.git
cd 1TAM-MD
npm install
cp .env.example .env
# Edit .env with your details
npm start
```

---

## 🤖 AI Chat Setup

The bot supports two AI providers:

**Option A — Google Gemini (FREE)**
1. Visit [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Click *Create API Key*
3. Set `GEMINI_API_KEY=your_key_here` in your environment

**Option B — OpenAI (Paid)**
1. Get key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Set `OPENAI_API_KEY=your_key_here`
3. Set `AI_PROVIDER=openai`

---

## 📋 All Commands

### 🤖 AI Chat
| Command | Description |
|---------|-------------|
| `.ai [question]` | Ask AI anything |
| `.ask [question]` | Same as .ai |
| `.chat [message]` | Chat with AI |
| `.gpt [prompt]` | AI response |
| `.aiclear` | Clear your AI chat history |
| `.aistatus` | Show AI provider info |

### 📌 General
| Command | Description |
|---------|-------------|
| `.menu` | Show all commands |
| `.ping` | Check response speed |
| `.alive` | Bot status |
| `.info` | Bot info |
| `.owner` | Owner contact |
| `.runtime` | Bot uptime |
| `.time` | Current time |
| `.date` | Current date |

### 🎨 Media
| Command | Description |
|---------|-------------|
| `.sticker` | Reply to image → sticker |
| `.toimg` | Reply to sticker → image |
| `.tts [text]` | Text to speech |
| `.ytmp3 [url]` | YouTube audio |
| `.ytmp4 [url]` | YouTube video |
| `.meme` | Random meme |
| `.document` | Convert media to document |

### 🔍 Search
| Command | Description |
|---------|-------------|
| `.wiki [query]` | Wikipedia |
| `.weather [city]` | Weather info |
| `.lyrics [song]` | Song lyrics |
| `.translate [lang] [text]` | Translate (e.g. `.translate fr Hello`) |
| `.define [word]` | Dictionary |
| `.github [user]` | GitHub profile |
| `.movie [title]` | Movie info |
| `.npm [package]` | NPM package info |

### 😂 Fun
| Command | Description |
|---------|-------------|
| `.joke` | Random joke |
| `.quote` | Inspirational quote |
| `.fact` | Random fact |
| `.dare` | Random truth or dare |
| `.truth` | Truth question |
| `.roast [@user]` | Roast someone |
| `.8ball [question]` | Magic 8-ball |
| `.roll [sides]` | Roll dice |
| `.flip` | Flip a coin |
| `.choose [a]\|[b]` | Random choice |
| `.ship [@a] [@b]` | Love compatibility |
| `.rate [@user]` | Rate someone |

### 👥 Group (Admin Only)
| Command | Description |
|---------|-------------|
| `.kick [@user]` | Kick member |
| `.add [number]` | Add member |
| `.promote [@user]` | Make admin |
| `.demote [@user]` | Remove admin |
| `.mute` | Mute group |
| `.unmute` | Unmute group |
| `.tagall [msg]` | Mention everyone |
| `.del` | Delete replied message |
| `.setname [name]` | Set group name |
| `.setdesc [text]` | Set group description |
| `.link` | Get invite link |
| `.revoke` | Reset invite link |
| `.getpp [@user]` | Get profile picture |
| `.groupinfo` | Group information |

### ⚙️ Owner Only
| Command | Description |
|---------|-------------|
| `.broadcast [msg]` | Broadcast to all chats |
| `.block [@user]` | Block user |
| `.unblock [@user]` | Unblock user |
| `.clearsession` | Clear session data |

---

## 📁 File Structure

```
1TAM-MD/
├── index.js          # Entry point + web server
├── config.js         # All configuration
├── getSession.js     # Session ID generator
├── Procfile          # Heroku process config
├── app.json          # Heroku one-click deploy config
├── .env.example      # Environment variables template
├── package.json      # Dependencies
├── lib/
│   ├── connection.js # WhatsApp connection + session restore
│   ├── handler.js    # Message router
│   └── utils.js      # Helper functions
└── commands/
    ├── ai.js         # AI chat (Gemini / OpenAI)
    ├── general.js    # General commands
    ├── group.js      # Group management
    ├── media.js      # Media commands
    ├── fun.js        # Fun commands
    └── search.js     # Search commands
```

---

## ⚙️ Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SESSION_ID` | Bot session (from getSession.js) | ✅ Yes |
| `OWNER_NUMBER` | Your WhatsApp number | ✅ Yes |
| `OWNER_NAME` | Your name | ✅ Yes |
| `GEMINI_API_KEY` | Gemini API key (free AI) | Optional |
| `OPENAI_API_KEY` | OpenAI API key | Optional |
| `PREFIX` | Command prefix (default: `.`) | Optional |
| `PUBLIC_MODE` | Allow anyone to use bot | Optional |
| `TIMEZONE` | e.g. Africa/Lagos | Optional |
| `AI_ENABLED` | Enable AI chat (true/false) | Optional |
| `AI_PROVIDER` | `gemini` or `openai` | Optional |

---

## 📌 Notes

- Uses the WhatsApp Web API (Baileys) — unofficial, use responsibly
- SESSION_ID avoids rescanning QR on every restart/deploy
- For Heroku free tier — use [UptimeRobot](https://uptimerobot.com) to ping `/health` every 25 min to keep the bot awake

---

*Built with ❤️ — 1TAM-MD*
