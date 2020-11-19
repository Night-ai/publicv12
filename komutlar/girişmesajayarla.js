const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  

    let prefix = db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let gM = args.slice(0).join(' ');
  
  if (!gM) {
    
    var embed6 = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(`Giriş mesajı ayarlamak istediğiniz mesajı yazmalısınız! \n**NOT:** Mesajda kişinin geleceği yere **{kullanıcı}**, sunucu isminin geleceği yere **{sunucu}** veya sunucudaki kişi sayısının geleceği yere **{kişisayısı}** yazınız.`) 
        return message.reply(embed6)
    }
  

    /*if(!gMesaj[message.guild.id]){
        gMesaj[message.guild.id] = {
            gm: gM
        };
    }
    fs.writeFile("././jsonlar/girisM.json", JSON.stringify(gMesaj), (x) => {
        if (x) console.error(x)
      })*/
  
  
 

    if(args[0] === 'kapat') {
   if (db.has(`girisM_${message.guild.id}`) === true) {
     const embed99 = new Discord.RichEmbed()
    .setDescription(client.emojis.get("622384595601457163") + `| Giriş mesajı başarıyla kapatıldı.`)
    .setColor(client.ayarlar.renk)
     message.channel.send(embed99)
     db.delete(`girisM_${message.guild.id}`)
     return
}
      const embed4 = new Discord.RichEmbed()
    .setDescription(client.emojis.get("622384793191055370") + `| Sunucunuzda giriş mesajı zaten kapalı.`)
    .setColor(client.ayarlar.renk)
  message.channel.send(embed4)
    return
  
  }
    
  
    var s = db.set(`girisM_${message.guild.id}`, gM)
  
    const embed = new Discord.RichEmbed()
    .setDescription(client.emojis.get("622384595601457163") + `| Giriş mesajı başarıyla ayarlandı.`)
    .setColor(client.ayarlar.renk)
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['giriş-mesaj'],
    permLevel: 4,
    kategori: "ayarlar",
  };

  exports.help = {
    name: 'giriş-mesaj-ayarla',
    description: 'Giriş mesajını değiştirmenizi sağlar.',
    usage: 'giriş-mesaj-ayarla <mesaj> \n**NOT:** Mesajda kişinin geleceği yere **{kullanıcı}** yazınız aksi taktirde kişiyi göstermez.',
    
  };