import { Client, GatewayIntentBits } from 'discord.js'; // Existing import
import express from 'express'; // <--- ADD THIS

// --- PASTE THIS BLOCK START ---
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Bot is alive and listening for Render!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Health check server running on port ${port}`);
});
// --- PASTE THIS BLOCK END ---

// The rest of your existing code (const client = new Client...) follows here

import DiscordBot from "./bot";

const bot = new DiscordBot();
bot.start().catch(console.error);
