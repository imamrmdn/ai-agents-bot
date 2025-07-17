import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

//
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

bot.on("message", async (message) => {

    if(message.text == "/start"){
        bot.sendMessage(message.chat.id, 'test bun ')
    }else{
        bot.sendMessage(message.chat.id, 'zzz...')
    }
})

const server = Bun.serve({
  port: 5001,
  fetch(req) {
    return new Response("Bun Engine!");
  },
});

console.log(`Bun Engine Listening on http://localhost:${server.port} ...`);