module.exports = {
  name: "ping",
  aliases: ["p"],

  execute(ctx) {
    ctx.session.count++;
    ctx.reply(`🏓 Pong (${ctx.session.count})`);
  }
};