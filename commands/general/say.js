module.exports = {
  name: "say",
  execute(ctx, args, bot) {
    let textToSay = args.join(" ");
    ctx.reply(`${textToSay}`);
  }
};
