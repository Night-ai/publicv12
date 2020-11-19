const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  if (!db.has(`premod_${message.guild.id}`) == true) {
    
      
      return message.channel.send("<:hata:637685816197382165> Bu sunucuda **premium mod aktif değil**, bu sebepten dolayı premium sunucu kodlarını kullanamazsınız.")

    
  } else {
 exports.run = async (client, message, args, dil) => {
if(args[0] === "kapat") {
  db.delete(`sunucular.${message.guild.id}.koruma`)
  message.channel.send(`<a:sea:607177436139880470> **Real Fox** Saldırı koruması başarıyla kaldırıldı.`)
} else if(args[0] === "aç") {
  db.set(`sunucular.${message.guild.id}.koruma`, `aktif`)
  message.channel.send('<a:sea:607177436139880470> **Real Fox** Bu sunucuda yapılan saldırıları **engelleyecek**!')
} else return message.reply(dil.doğrukullanım)
}


}
};





exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4,
  kategori: "Koruma-Sistem"
};

exports.help = {
  name: 'koruma',
  description: 'Bana ait değildir ',
  usage: 'koruma '
};