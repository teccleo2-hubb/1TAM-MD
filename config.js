require('dotenv').config();

module.exports = {
  botName: '1TAM-MD',
  botVersion: '1.0.0',
  prefix: process.env.PREFIX || '.',
  ownerNumber: process.env.OWNER_NUMBER || '1234567890',
  ownerName: process.env.OWNER_NAME || '1TAM Owner',
  sessionId: process.env.SESSION_ID || '',
  timezone: process.env.TIMEZONE || 'Africa/Lagos',
  language: process.env.LANGUAGE || 'en',
  publicMode: process.env.PUBLIC_MODE === 'true' || false,
  autoRead: process.env.AUTO_READ === 'true' || true,
  autoTyping: process.env.AUTO_TYPING === 'true' || true,
  autoRecording: process.env.AUTO_RECORDING === 'true' || false,
  antiSpam: process.env.ANTI_SPAM === 'true' || true,
  antiSpamLimit: parseInt(process.env.ANTI_SPAM_LIMIT) || 5,
  port: parseInt(process.env.PORT) || 3000,

  // AI Chat Configuration
  aiEnabled: process.env.AI_ENABLED === 'true' || true,
  aiProvider: process.env.AI_PROVIDER || 'gemini',
  geminiApiKey: process.env.GEMINI_API_KEY || '',
  openaiApiKey: process.env.OPENAI_API_KEY || '',
  aiPersonality: process.env.AI_PERSONALITY || `You are 1TAM-MD, a helpful, friendly and intelligent WhatsApp bot assistant. You are helpful, concise, and conversational. Keep replies short and natural for WhatsApp chat. Do not use markdown formatting like ** or ## — just plain text. You can speak multiple languages.`,
  aiTriggerWords: ['ai', 'ask', 'chat', 'gpt', 'gemini'],

  menuText: `╔══════════════════════╗
║     *1TAM-MD BOT*      ║
║   Version 1.0.0        ║
╚══════════════════════╝

*PREFIX:* .

*📌 GENERAL*
.menu - Show this menu
.ping - Check bot speed
.alive - Bot status
.info - Bot information
.owner - Owner contact
.runtime - Bot uptime
.time - Current time
.date - Current date

*🤖 AI CHAT*
.ai [question] - Ask AI anything
.ask [question] - Ask AI anything
.chat [message] - Chat with AI
.gpt [prompt] - AI response
.aiclear - Clear AI memory
.aistatus - AI provider info

*🎨 MEDIA*
.sticker - Create sticker
.toimg - Sticker to image
.tts [text] - Text to speech
.ytmp3 [url] - YT Audio
.ytmp4 [url] - YT Video
.meme - Random meme
.document - Convert to document

*🔍 SEARCH*
.wiki [query] - Wikipedia
.weather [city] - Weather
.lyrics [song] - Song lyrics
.translate [lang] [text] - Translate
.define [word] - Dictionary
.github [user] - GitHub profile
.movie [title] - Movie info

*😂 FUN*
.joke - Random joke
.quote - Random quote
.fact - Random fact
.dare - Truth or dare
.truth - Truth question
.roast - Get roasted
.8ball [question] - Magic ball
.roll [sides] - Roll dice
.flip - Flip a coin
.choose [a]|[b] - Choose option
.ship [@a] [@b] - Love meter
.rate [@user] - Rate someone

*👥 GROUP ONLY*
.kick [@user] - Kick member
.add [number] - Add member
.promote [@user] - Make admin
.demote [@user] - Remove admin
.mute - Mute group
.unmute - Unmute group
.tagall - Tag everyone
.del - Delete message
.setname [name] - Set group name
.setdesc [text] - Set group desc
.link - Get invite link
.revoke - Reset invite link
.getpp [@user] - Get profile pic
.groupinfo - Group information

*⚙️ OWNER ONLY*
.broadcast [msg] - Broadcast
.block [@user] - Block user
.unblock [@user] - Unblock user
.clearsession - Clear session

> Powered by *1TAM-MD* 🤖`
};
