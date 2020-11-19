 const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send(`:x:\`aç\` veya \`kapat\` yazmalısın.`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`<:hata:637685816197382165> Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz.`)
  
  if (args[0] === 'aç') {
    db.set(`saas_${message.guild.id}`, 'acik')
message.channel.send(`<:rf_check:642475879615823882> Selam sistemi başarıyla açıldı.`)
      
    
  }
  if (args[0] === 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')

     message.channel.send(`<:rf_check:642475879615823882> Selam sistemi başarıyla **kapatıldı**.`)
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['selamsistemi','selam-sistemi'],
  permLevel: 3
};

exports.help = {
  name: 'sa-as',
  description: 'Botun pingini gösterir.',
  usage: 'sa-as'
};