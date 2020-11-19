const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  
 let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  let channel = message.mentions.channels.first()
  
    if (!channel) {

  
    
    

      return message.channel.send(`<:hata:637685816197382165> Lütfen ayarlamak istediğiniz kanalı etiketleyiniz. Örnek: f?giriş-çıkış-ayarla #kanal`)
    }

  
 
      if(args[0] === 'kapat') {
   if (db.has(`girisM_${message.guild.id}`) === true) {
 

     message.channel.send(`<:moly_check:637743464381153321> Giriş çıkış kanalı başarıyla kaldırıldı.`)
     db.delete(`gc_${message.guild.id}`)
     return
}
        const embed5 = new Discord.RichEmbed()
    .setDescription(client.emojis.get("622384793191055370") + `| Giriş çıkış kanalı zaten bulunmamakta`)
    .setColor(client.ayarlar.renk)

  message.channel.send(embed5)
    return
  
  }
    /*if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            gkanal: channel.id
        };
    }
  
    fs.writeFile("././jsonlar/gc.json", JSON.stringify(kanal), (x) => {
        if (x) console.error(x)
      })*/
  
    var s = db.set(`gc_${message.guild.id}`, channel.id)
  
 
   
    message.channel.send(`<:moly_check:637743464381153321> Giriş çıkış kanalı başarıyla ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hoş-geldin-ayarla', 'giriş-çıkış-belirle', 'girişçıkışayarla', 'giriş-çıkış-kanal'],
    permLevel: 4,
    kategori: "ayarlar",
  
}

exports.help = {
    name: 'giriş-çıkış-ayarla',
    description: 'Giriş çıkış kanalını ayarlar.',
    usage: 'giriş-çıkış-ayarla <#kanal>',

}