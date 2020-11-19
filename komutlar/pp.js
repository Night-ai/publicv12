const Discord = require('discord.js');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor(client.ayarlar.renk));
   }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['pp'],
 permLevel: 0
};

exports.help = {
 name: 'avatar',
 description: 'Avatarınızı Atar ',
 usage: 'avatarım'
};
