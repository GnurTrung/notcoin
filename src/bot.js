const { Telegraf } = require("telegraf");
const bot = new Telegraf("6294584001:AAHFt3xxLodbPU_8KlHBHZWpQipzqeRdOxg");
bot.start((ctx) =>
  ctx.reply("Welcome to Notcoin Game!", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play Game",
            // web_app: { url: "https://xaitama.com/" },
            web_app: { url: "https://game-slot-ruddy.vercel.app/" },
            // web_app: { url: "https://notcoin-three.vercel.app/" },
          },
        ],
      ],
    },
  })
);
bot.launch();
