module.exports = async (ctx, next) => {
  if (ctx.from?.is_bot) return;

  console.log(`📩 ${ctx.from.id}:`, ctx.update);
  await next();
};