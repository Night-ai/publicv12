const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => { 
 const args0 = args[0];
  if(!args0) {
    message.channel.send(message.author.username + ", lütfen bir sunucu **id**'si yaz!")
  } else {
  
db.set(`premod_${args0}`, "aktif")
  message.channel.send("<:moly_check:637743464381153321> Başarıyla premium aktif edildi.")
}
  }
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-ver'],
    permLevel: 5,
      
}

exports.help = {
    name: 'premiumver',
    description: 'Giriş çıkış kanalını ayarlar.',
    usage: 'giriş-çıkış-ayarla <#kanal>',

}