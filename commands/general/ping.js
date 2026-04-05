const { InlineKeyboard } = require("grammy");

const kb = new InlineKeyboard()
  .text("A", "a")
  .text("B", "b")
  .row()
  .text("C", "c");

module.exports = {
  name: "ping",
  aliases: ["p"],

  execute(ctx) {
    ctx.session.count++;
    ctx.reply(`🏓 Pong (${ctx.session.count})`, { reply_markup: kb });
  }
};
