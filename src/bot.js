const { Telegraf } = require("telegraf");
const bot = new Telegraf("6294584001:AAHFt3xxLodbPU_8KlHBHZWpQipzqeRdOxg");
bot.start((ctx) =>
  ctx.reply("Welcome to Notcoin Game!", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play Game",
            web_app: { url: "https://xaitama.com/" },
          },
        ],
      ],
    },
  })
);
bot.launch();
