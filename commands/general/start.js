module.exports = {
  name: "start",
  description: "Start bot",

  execute(ctx, args) {
    if(!args || args.length < 1){
      ctx.reply("👋 Welcome!");
    } else {
      ctx.reply(`👋 Welcome!, Referred By: ${args[0]}.userId`);
    };
  }
};
