const { Message } = require("discord.js");

module.exports = {
  name: "test",
  description: "A Simple Test Command",
  aliases: [""],
  usage: "",
  guildOnly: false,
  args: false,
  permissions: {
    bot: [],
    user: [],
  },
  /**
    * @param {Message} message
    */
  execute: (message) => {
    message.reply("A Simple Test Command, To edit this text, go into Commands/test.js");
  },
};

