const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
 const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  const embed = new Discord.RichEmbed()
  .setColor(client.ayarlar.renk)
  .setTitle("Sunucudaki Emojiler")
  .setDescription(emojiList)
  .setFooter(message.author.tag + " tarafından istendi.", message.author.avatarURL)
  message.channel.send(embed); 
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["emoji-liste"],
    permLevel: 0,
    kategori: "sunucu",
  };
  
  exports.help = {
    name: 'emojiler',
    description: 'Sunucu ayarlarını gösterir.',
    usage: 'ayarlar',
  };
