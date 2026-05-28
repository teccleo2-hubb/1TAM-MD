/**
 * 1TAM-MD Session Generator
 * Run this script ONCE locally to get your SESSION_ID for Heroku/cloud deployment.
 *
 * Usage:
 *   node getSession.js
 *   → Scan the QR code with WhatsApp
 *   → Copy the SESSION_ID that appears
 *   → Paste it into your Heroku config vars
 */

const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion
} = require('@whiskeysockets/baileys');
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const path = require('path');

const SESSION_DIR = path.join(__dirname, 'auth_info_session_gen');

async function generateSession() {
  console.log('\n\x1b[36m╔══════════════════════════════════════╗\x1b[0m');
  console.log('\x1b[36m║   1TAM-MD Session Generator           ║\x1b[0m');
  console.log('\x1b[36m╚══════════════════════════════════════╝\x1b[0m');
  console.log('\n\x1b[33m→ Scan the QR code with WhatsApp to generate your session.\x1b[0m\n');

  const { state, saveCreds } = await useMultiFileAuthState(SESSION_DIR);
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    auth: state,
    browser: ['1TAM-MD', 'Chrome', '1.0.0']
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', async ({ connection, lastDisconnect }) => {
    if (connection === 'open') {
      console.log('\n\x1b[32m✅ Connected! Generating session ID...\x1b[0m\n');
      await new Promise((r) => setTimeout(r, 2000));

      const files = fs.readdirSync(SESSION_DIR);
      const sessionData = {};
      for (const file of files) {
        const content = fs.readFileSync(path.join(SESSION_DIR, file), 'utf8');
        sessionData[file] = content;
      }

      const encoded = Buffer.from(JSON.stringify(sessionData)).toString('base64');

      console.log('\x1b[32m╔══════════════════════════════════════╗\x1b[0m');
      console.log('\x1b[32m║   YOUR SESSION_ID (copy this):        ║\x1b[0m');
      console.log('\x1b[32m╚══════════════════════════════════════╝\x1b[0m\n');
      console.log('\x1b[33m' + encoded + '\x1b[0m');
      console.log('\n\x1b[36m→ Paste this as SESSION_ID in your Heroku config vars.\x1b[0m');
      console.log('\x1b[36m→ Then deploy your bot to Heroku — no QR scan needed!\x1b[0m\n');

      fs.rmSync(SESSION_DIR, { recursive: true, force: true });
      process.exit(0);
    }

    if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      if (reason !== DisconnectReason.loggedOut) {
        console.log('\x1b[31mConnection closed. Retrying...\x1b[0m');
        generateSession();
      }
    }
  });
}

generateSession().catch(console.error);
