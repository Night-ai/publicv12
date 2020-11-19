const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let ch = await db.fetch(`kayitC_${message.guild.id}`);
  let ar = await db.fetch(`kayitA_${message.guild.id}`);
  let vr = await db.fetch(`kayitV_${message.guild.id}`);
  let lh = await db.fetch(`kayitLC_${message.guild.id}`);
  
  if (!ch) return 
  if (!ar) return
  if (!vr) return 
  if (!lh) return
  
  let isim = args[0]
  let yas = args[1];
  const ssbasari = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription('**Doğru kullanım:** f?kayıtol isim yaş')
  
  if (!isim) return message.channel.send(ssbasari)
  if (!yas) return message.channel.send(ssbasari)
  const logbasari = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription('| Başarıyla kayıt oldun!')
    message.channel.send(logbasari)
  message.member.setNickname(`${isim} | ${yas}`)
  message.member.removeRole(message.guild.roles.get(ar));
  message.member.addRole(message.guild.roles.get(vr));
  const logsbasari = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(`\`${message.author.username}\` adlı kullanıcı kayıt oldu!`)
    
  client.channels.get(lh).send(logsbasari)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıtol"],
  permLevel: 0
}
exports.help = {
  name: "kayıt-ol",
  description: "Kayıt olmanızı sağlar.",
  usage: "!!kayıt-ol"
}
