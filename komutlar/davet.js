const db = require("quick.db")
const Discord = require("discord.js");
exports.run = async(client, message, args) => {

  

  const embed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
  .setThumbnail(client.user.avatarURL)
  .setDescription(`[Davet Linki](https://molybot.glitch.me/botuekle) | [Web Panel](https://molybot.glitch.me/) | [DBL OY](https://discordbots.org/${client.user.id})\n`)
  .setAuthor(`Real Fox`, client.user.avatarURL)  
  //.setFooter("Turk Bot List Ozel Komut")
  message.channel.send(embed)
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet", "d", "y"],
  category: "admin",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Gelişmiş Sayfalı Yardım.',
  usage: 'yardım'
};