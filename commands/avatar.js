const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let avatar = message.author.avatarURL
  let embed = new Discord.RichEmbed()
  .setDescription("Pokazywanie avataru")
  .setColor("#4286f4")
  .addField(`Avatar użytkownika ${message.author.username}`, "Całkiem identyczny ;3")
  .setImage(avatar)
  message.channel.send(embed);
  message.react("✅")
}
module.exports.help = {
  name:"avatar"
}
