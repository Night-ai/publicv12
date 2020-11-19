const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (bot, message) => {
   let c = message.mentions.channels.first()
   if (!c) return message.channel.send('<:hata:637685816197382165> Lütfen bir kanal etiketleyiniz.')
   db.set(`guvenlik${message.guild.id}`, c.id)
   message.channel.send('<:moly_check:637743464381153321> Güvenlik kanalı **başarıyla** ayarlandı.')
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','güvenlik'],
  permLevel: 3
};

module.exports.help = {
  name: 'güvenlik',
  description: 'guvenlik',
  usage: 'güvenlik-ayarla'
};