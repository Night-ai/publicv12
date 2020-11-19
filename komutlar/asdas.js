const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
module.exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
 
.setColor('RED')
  .addField(`Başarılı!`,`Özelden Davet Linkini Gönderiyorum!`)
    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`Botun Ekli Olan Sunucu ID Giriniz`)
  
  
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davetal","da"],
  permLevel: 4
};

exports.help = {
  name: 'inviteal',
};