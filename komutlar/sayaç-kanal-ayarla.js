const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');
//let kanal = JSON.parse(fs.readFileSync("././jsonlar/sKanal.json", "utf8"));

exports.run = async (client, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  

    let channel = message.mentions.channels.first() || message.guild.channels.find(c=>c.name===args.slice(0).join(' '))
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;


  
    if (!channel) {
    
     return message.channel.send(`<:rf_xmark:642475975761723432> Lütfen komutla birlikte bi kanal etiketleyin.`)
    }

      if(args[0] === 'kapat') {
      
   if (db.has(`sKanal_${message.guild.id}`) === true) {
   
     db.delete(`sKanal_${message.guild.id}`)
     
       if (db.has(`sayac_${message.guild.id}`) === true) {
       db.delete(`sayac_${message.guild.id}`)
  
     message.channel.send(`<:rf_xmark:642475975761723432>  Sayaç sistemi başarıyla kapatıldı.`)
         return
       }
 
     message.channel.send(`<:rf_xmark:642475975761723432>  Sayaç sistemi başarıyla kapatıldı.`)
     return
}

     message.channel.send(`<:rf_xmark:642475975761723432> Sayaç sistemi sistemi zaten kapalı.`)//editi sal aq
    return
  
  }
  
    db.set(`sKanal_${message.guild.id}`, channel.id)

    message.channel.send(`<:rf_check:642475879615823882> Sayaç kanalı başarıyla ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayaç-kanal', 'sayaçkanal'],
    permLevel: 4,
    kategori: "ayarlar",
}

exports.help = {
    name: 'sayaç-kanal-ayarla',
    description: 'Sayaç kanalını ayarlar.',
    usage: 'sayaç-kanal-ayarla <#kanal>',
}