const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');
//let kanal = JSON.parse(fs.readFileSync("././jsonlar/log.json", "utf8"));

exports.run = async (client, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  
 
  let channel = message.mentions.channels.first()
  
    

    /*if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            log: channel.id
        };
    }
  
    fs.writeFile("././jsonlar/log.json", JSON.stringify(kanal), (x) => {
        if (x) console.error(x)
      })*/
  
  
  
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
      if(args[0] === 'kapat') {
   if (db.has(`log_${message.guild.id}`) === true) {
  
     message.channel.send(`<:moly_check:637743464381153321> Log Sistemi başarıyla kapatıldı.`)
     db.delete(`log_${message.guild.id}`)
     return
}

  message.channel.send(`<:hata:637685816197382165> Log Sistemi zaten kapalı.`)
    return
  
  }
  
  if (!channel) {

        return message.channel.send(`<:hata:637685816197382165> Lütfen komutla birlikte bir kanal etiketleyiniz.`)
  
  }
  
  
    db.set(`log_${message.guild.id}`, channel.id)
  
message.channel.send("<:moly_check:637743464381153321> Log kanalı başarıyla ayarlandı.")
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['log-belirle', 'log-kanal'],
    permLevel: 4,
    kategori: "ayarlar",
}

exports.help = {
    name: 'log-ayarla',
    description: 'Sunucu kayıtları kanalını ayarlar.',
    usage: 'log-ayarla <#kanal>',
 
}