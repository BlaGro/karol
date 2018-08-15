const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let embed  = new Discord.RichEmbed()
  .setDescription(`${message.author.username} oto lista komend`)
  .setColor("#4286f4")
  .addField("k!avatar", "**Pokazuje twój avatar**")
  .addField("k!ikona", "**Pokazuje ikonke serwera**")
  message.channel.send(embed);
}
module.exports.help = {
  name:"pomoc"
}
