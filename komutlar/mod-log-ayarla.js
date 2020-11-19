const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');
//let kanal = JSON.parse(fs.readFileSync("././jsonlar/mLog.json", "utf8"));

exports.run = async (client, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  
 
  
  let channel = message.mentions.channels.first()
  
  
    let prefix = db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
    if(args[0] === 'kapat') {
   if (db.has(`mLog_${message.guild.id}`) === true) {

     message.channel.send(`<:moly_check:637743464381153321> Mod Log sistemi başarıyla kapatıldı.`)
     db.delete(`mLog_${message.guild.id}`)
     return
}
      const embed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(`<:hata:637685816197382165> Mod Log Sistemi zaten **kapalı**.`)
     message.channel.send(embed)
    return
  
  }

  
    if (!channel) {

     return message.channel.send(`<:hata:637685816197382165> Lütfen komutla birlikte bir kanal etiketleyin.`)
    }

    /*if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            modlog: channel.id
        };
    }
  
    fs.writeFile("././jsonlar/mLog.json", JSON.stringify(kanal), (x) => {
        if (x) console.error(x)
      })*/
  
  db.set(`mLog_${message.guild.id}`, channel.id)
  
    message.channel.send(client.emojis.get("619596371879657513") + " Sunucu kayıtları(mod-log) kanalı başarıyla **ayarlandı**.")
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log-belirle', 'modlog-kanal'],
    permLevel: 4,
    kategori: "moderasyon",
}

exports.help = {
    name: 'mod-log-ayarla',
    description: 'Moderasyon kayıtları kanalını ayarlar.',
    usage: 'mod-log-ayarla <#kanal>',
}