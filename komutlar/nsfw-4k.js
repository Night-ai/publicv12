const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
       const carry4 = new Discord.RichEmbed()
      .setTitle(`Resim Gözükmüyor mu ? Tıkla!`)
      .setColor("RANDOM")
      .setURL(response.body.message)
      .setImage(response.body.message)
      .setTimestamp()
      .setFooter(`Requested by ${msg.author.username}`, msg.author.avatarURL)
      msg.channel.send(carry4);
    });
  } else {
const embed = new Discord.RichEmbed()
.setThumbnail("https://cdn.discordapp.com/attachments/635908574144495616/642398276129259580/image.png")
  .setAuthor('Bu Kanal NSFW Kanalı Değil!')
  .setDescription("Eğer İzinleri Nasıl Ayarlıyacağını Bilmiyorsan Aşşğıdaki Gif'e Bakarak Yapabilirsin !")
  .setImage("https://images-ext-1.discordapp.net/external/8MfjnzwRfOG4Ywm1Kvep6lb8em7ym9cKUZL6QoTC_6c/https/b1nzy-banned.me/g/V6Aeh.gif")
msg.channel.send(embed)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '4k',
  description: 'Kaliteli Rasgele NSFW Gifi Atar',
  usage: '4k'
};