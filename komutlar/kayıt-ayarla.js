const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let x = args[0];
  const embed = new Discord.RichEmbed()
  .setDescription(client.emojis.get("619596371674005515") + `| **Örnek Kullanım:** f?kayıt-ayarla verilecek-rol @Rol\n${client.emojis.get("619596371674005515")}| **Diğer İşlemler;** \`alınacak-rol | verilecek-rol | kayıt-kanal | sıfırla |log-kanal\``)
  .setColor(client.ayarlar.renk)
  if (!x) return message.channel.send(embed)
  
  if (x === "alınacak-rol"){
    
    let rol = message.mentions.roles.first();
    const embed = new Discord.RichEmbed()
  .setDescription(client.emojis.get("619596371674005515") + `| **Doğru kullanım:** f?kayıt-ayarla alınacak-rol @Kayıtsız`)
  .setColor(client.ayarlar.renk)
    if (!rol) return message.channel.send(embed)
    db.set(`kayitA_${message.guild.id}`, rol.id);
 
    message.channel.send(client.emojis.get("619596371879657513") + '| Başarıyla alınacak rol **ayarlandı**!')
  } else if (x === "verilecek-rol"){
    let rol = message.mentions.roles.first();
    const embed3134 = new Discord.RichEmbed()
  .setDescription(client.emojis.get("619596371674005515") + '| **Doğru kullanım:** f?kayıt-ayarla verilecek-rol @Üye')
  .setColor(client.ayarlar.renk)
    if (!rol) return message.channel.send(embed3134)
    
    db.set(`kayitV_${message.guild.id}`, rol.id);
  message.channel.send(client.emojis.get("619596371879657513") + '| Başarıyla verilecek rol **ayarlandı**!')
  } else if (x === "kayıt-kanal"){
    let kanal = message.mentions.channels.first();
    const embed313131 = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(client.emojis.get("619596371674005515") + '| **Doğru kullanım:** f?kayıt-ayarla kayıt-kanalı #kayıt-ol')
    if (!kanal) return message.channel.send(embed313131)
    
    db.set(`kayitC_${message.guild.id}`, kanal.id);

    message.channel.send(client.emojis.get("619596371879657513") + '| Başarıyla kayıt olunacak kanalı ayarladın.')
  } else if (x === "log-kanal"){
    let kanal = message.mentions.channels.first();
    const logkanall = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(client.emojis.get("619596371674005515") + '| **Doğru kullanım:** f?kayıt-ayarla log-kanal #kayıt-olanlar')
    if (!kanal) return message.channel.send(logkanall)
    
    db.set(`kayitLC_${message.guild.id}`, kanal.id);
message.channel.send(client.emojis.get("619596371879657513") + '| Başarıyla kayıt log kanalı **ayarladın**.')
  } else if (x === "sıfırla"){
    
  let ch = await db.delete(`kayitC_${message.guild.id}`);
  let ar = await db.delete(`kayitA_${message.guild.id}`);
  let vr = await db.delete(`kayitV_${message.guild.id}`);
  let lh = await db.delete(`kayitLC_${message.guild.id}`);
    
  message.channel.send(client.emojis.get("619596371879657513") + '| Başarıyla kayıt sistemi **sıfırlandı**.')
  }
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt-ayarla"],
  permLevel: 3
}
exports.help = {
  name: "kayıt",
  description: "Kayıt sistemi komutlarını gösterir.",
  usage: "!!kayıt"
}