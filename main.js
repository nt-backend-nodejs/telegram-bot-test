const { Bot } = require("grammy")

const bot = new Bot("8235625832:AAEujoq41da56ujlCL-96P3-pTQJKu58cTM")

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"))

bot.start()