const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../util/config");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "ayuda",
  aliases: ["a"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user.username }))
      .setDescription(i18n.__("help.embedDescription"))
      .setColor("#00C4B3");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });
    helpEmbed.setTimestamp().setFooter("By hdev07");
    return message.channel.send(helpEmbed).catch(console.error);
  }
};
