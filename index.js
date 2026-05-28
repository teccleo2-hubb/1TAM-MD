require('dotenv').config();
const express = require('express');
const { startBot } = require('./lib/connection');
const config = require('./config');

const app = express();
const PORT = config.port;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    bot: '1TAM-MD',
    version: config.botVersion,
    status: 'running',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`\x1b[36m[1TAM-MD] Web server running on port ${PORT}\x1b[0m`);
});

console.log(`
\x1b[35m
  ███████╗████████╗ █████╗ ███╗   ███╗      ███╗   ███╗██████╗ 
  ╚════██║╚══██╔══╝██╔══██╗████╗ ████║      ████╗ ████║██╔══██╗
      ██╔╝   ██║   ███████║██╔████╔██║█████╗██╔████╔██║██║  ██║
     ██╔╝    ██║   ██╔══██║██║╚██╔╝██║╚════╝██║╚██╔╝██║██║  ██║
     ██║     ██║   ██║  ██║██║ ╚═╝ ██║      ██║ ╚═╝ ██║██████╔╝
     ╚═╝     ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝      ╚═╝     ╚═╝╚═════╝ 
\x1b[0m
\x1b[32m  WhatsApp Multi-Device Bot | Version ${require('./config').botVersion}\x1b[0m
\x1b[33m  Starting...\x1b[0m
`);

startBot().catch((err) => {
  console.error('\x1b[31m[1TAM-MD] Fatal error:', err, '\x1b[0m');
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('\x1b[31m[1TAM-MD] Unhandled rejection:', err, '\x1b[0m');
});

process.on('uncaughtException', (err) => {
  console.error('\x1b[31m[1TAM-MD] Uncaught exception:', err, '\x1b[0m');
});
