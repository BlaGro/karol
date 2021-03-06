const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.lenght <= 0){
    console.log("Nie znaleziono komend")
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`Załadowano ${f}`);
    bot.commands.set(props.help.name, props)
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} jest online!`);

  bot.user.setActivity("Mój prefix k! | k!pomoc", {type: "WATCHING"})
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  if(message.content === "@everyone"){
    message.delete().catch(O_o=>{});
    return;
  }

});

bot.login(process.env.BOT_TOKEN)
