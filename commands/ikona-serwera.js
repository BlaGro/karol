const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let serwer = message.guild.iconURL;
  let embed = new Discord.RichEmbed()
  .setDescription(`${message.author.username} to jest ikonka serwera!`)
  .setColor("#012a6d")
  .addField("Podziwiajcie ikonke serwera", "Fajna co nie?")
  .setImage(serwer)
  message.channel.send(embed);
}
module.exports.help = {
  name:"ikona"
}
