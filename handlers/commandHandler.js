const fs = require("fs");
const path = require("path");

module.exports = (bot) => {
  const commands = new Map();
  const commandsPath = path.join(__dirname, "../commands");
  const commandFiles = fs.readdirSync(commandsPath);

  // load commands
  for (const file of commandFiles) {
    const cmd = require(`../commands/${file}`);

    if (!cmd.name || !cmd.execute) {
      console.log(`❌ Invalid command: ${file}`);
      continue;
    }

    commands.set(cmd.name, cmd);
    console.log(`✅ Loaded command: ${cmd.name}`);
  }

  // message handler for args parsing
  bot.on("message:text", async (ctx) => {
    const text = ctx.message.text;

    if (!text.startsWith("/")) return;

    const parts = text.split(" ");
    const commandName = parts[0].slice(1).toLowerCase();
    const args = parts.slice(1);

    const command = commands.get(commandName);
    if (!command) return;

    try {
      await command.execute(ctx, args, bot);
    } catch (err) {
      console.error(err);
      ctx.reply("❌ Error executing command");
    }
  });
};