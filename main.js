const { Bot } = require("grammy")

const bot = new Bot("8235625832:AAF1zqqSrwRy_4QhYW5X-jsF7DHJEFYzn9Y")

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"))

bot.start()