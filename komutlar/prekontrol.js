const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let pre = await db.fetch(`premod_${message.guild.id}`)
  let preYazi;
  if (pre == null) preYazi = '<:yasak:619596371674005515> Bu sunucuda premium mod aktif değil.'
  if (pre == 'aktif') preYazi = '<:doru:619596371879657513> Bu sunucu için premium mod aktif.'
  if (pre == 'deaktif') preYazi = '<:yasak:619596371674005515> Bu sunucuda premium mod aktif değil.'
  const embed = new Discord.RichEmbed()
  .setTitle('Premium Kontrol')
  .setColor(client.ayarlar.renk)
  .setDescription(preYazi)
  message.channel.send(embed)
  }
//tik: <:doru:619596371879657513>
//çarpı <:yasak:619596371674005515>v
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  kategori: 'premium',
    permLevel: 0,
}

exports.help = {
    name: 'premium-kontrol',
    description: 'Premium Kontrol Eder.',
    usage: 'premium-kontrol'
}