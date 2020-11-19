const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(client.ayarlar.renk)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.channel.send(`<:hata:637685816197382165> Lütfen sunucudan atacağınız kişiyi etiketleyiniz.`).catch(console.error);

  if (!message.guild.member(user).kickable) return message.channel.send(`<:hata:637685816197382165> Belirtilen kişiyi sunucudan atamam, çünkü rolü benden daha üstün.`);
  message.guild.member(user).kick();

  message.channel.send("<:moly_check:637743464381153321> Başarıyla " + user + " adlı kişi **" + reason + "** sebebiyle sunucudan atıldı.")
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 4
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};