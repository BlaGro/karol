const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let server = message.guild.iconURL;
  let embed = Discord.RichEmbed()
  .setDescription("Info o serwerze")
  .setColor("#647899")
  .setThumbnail(server)
  .addField("Właściciel", message.guild.owner)
  .addField("Nazwa serwera", message.guild.name)
  .addField("Kanał AFK", message.guild.afkChannel)
  .addField("Koniec czasu AFK", message.guild.afkTimeout)
  .addField("Powiadomienia o wiadomościach", message.guild.defaultMessageNotifications)
  .addField("Domyślna rola", message.guild.defaultRole)
  .addField("Możliwości", message.guild.features)
  .addField("Ilość użytkowników", message.guild.memberCount)
  message.channel.send(embed);
}
module.exports.help = {
  name:"server"
}
