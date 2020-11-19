const Discord = require('discord.js')
const fs = require('fs')
//const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');

   let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  //if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
   
	if(!args[0]) {

     return message.channel.send(`<:rf_xmark:642475975761723432>  Lütfen sayaç için belirlediğiniz hedef kullanıcı sayısını yazın.`)
	}

	//let profil = JSON.parse(fs.readFileSync("./jsonlar/sayac.json", "utf8"));

    if(args[0] === 'kapat') {
      
   if (db.has(`sayac_${message.guild.id}`) === true) {
   
     db.delete(`sayac_${message.guild.id}`)
     
       if (db.has(`sKanal_${message.guild.id}`) === true) {
       db.delete(`sKanal_${message.guild.id}`)

     message.channel.send(`<:rf_xmark:642475975761723432>  Sayaç sistemi bu sunucuda başarıyla **kapatıldı**.`)
         return
       }
message.channel.send(`<:rf_xmark:642475975761723432>  Sayaç sistemi bu sunucuda başarıyla **kapatıldı**.`)
     return
}
  message.channel.send(`<:rf_xmark:642475975761723432> Sayaç sistemi bu sunucuda zaten **kapalı**.`)
    return
  
  }
  
	if(isNaN(args[0])) {

     return  message.channel.send(`<:rf_xmark:642475975761723432>  Lütfen sadece rakam yazın.`)
    
	}

	if(args[0] <= message.guild.members.size) {

     message.channel.send(`<:rf_xmark:642475975761723432> Lütfen sunucu üye sayısından fazla bir hedef belirleyin.`)
	}

  

  db.set(`sayac_${message.guild.id}`, args[0])
 
	message.channel.send(`<:rf_check:642475879615823882> Sayaç sayısı başarıyla **ayarlandı**. \n\nLütfen sayaç kanalı ayarlamadıysanız ayarlayın: \`f?sayaç-kanal #kanal\` `)
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sayacayarla', 'sayac', 'sayaç'],
	permLevel: 4,
    kategori: "ayarlar",
  
}

exports.help = {
	name: 'sayaç-ayarla',
	description: 'Sayacı ayarlar.',
	usage: 'saya-çayarla <sayı>',
}