import { Bot } from "grammy";

// Create an instance of the `Bot` class and pass your authentication token to it.
const bot = new Bot("5780064964:AAF_nbeZpztDVbINpVy7cvL_6nr2k_oQdtY"); // <-- put your authentication token between the ""

// You can now register listeners on your index object `index`.
// grammY will call the listeners when users send messages to your index.

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// Now that you specified how to handle messages, you can start your index.
// This will connect to the Telegram servers and wait for messages.

// Start the index.
bot.start();