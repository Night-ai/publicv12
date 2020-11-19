//  .setColor('00b5ff')

const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(client.ayarlar.renk)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.channel.send(`<:rf_xmark:642475975761723432>  Lütfen sunucudan yasaklayacağınız kişiyi etiketleyin.`).catch(console.error);

  if (!message.guild.member(user).bannable) return message.channel.send(`<:rf_xmark:642475975761723432>  Belirttiğiniz kişiyi sunucudan yasaklayamam çünkü sunucuda benden daha üstün bir rolü var.`);
  message.guild.member(user).ban();


  message.channel.send("<:rf_check:642475879615823882> Başarıyla " + user + " adlı kullanıcı **" + reason + "** sebebiyle sunucudan yasaklandı.")
   user.send(`<:yasak:619596371674005515> Merhaba, **${guild.name}** adlı sunucudan **${reason}** sebebi ile ** ${message.author.username}** adlı yetkili tarafından yasaklandınız!`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 3,
    kategori: "moderasyon",
};

exports.help = {
  name: 'yasakla',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'yasakla <@kullanıcı> <sebep>',
 
};