const { Bot } = require("grammy");

const { token } = require("./config/config");

const bot = new Bot(token);

// middlewares
require("./middlewares/logger")(bot, () => {});
bot.use(require("./middlewares/session"));

// handlers
require("./handlers/commandHandler")(bot);
require("./handlers/buttonHandler")(bot);
require("./handlers/eventHandler")(bot);
require("./handlers/slashHandler")(bot);

bot.start();

console.log("🚀 Bot running...");
