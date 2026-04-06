function randomString(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// example: aB3xY9
module.exports = {
  name: "createReferal",
  execute(ctx) {
    let code = randomString(); 
    ctx.reply(`Code created: ${code}, Created By: @${ctx.from.username}`);
  }
};
