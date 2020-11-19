const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setDescription(`[Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958847) | [Web Panel](https://molybot.glitch.me/) | [Oy Ver](https://discordbots.org/bot/${client.user.id})\n\n\n`)
  
  .setThumbnail("https://cdn.discordapp.com/avatars/637300405264711694/05dfdab7e1990110da92963c5df5082c.png?size=2048")
  .setTitle(`<:yee:608977816872288256> Bot NSFW(+18) Komutları`)
.addField(`› ${prefix}pgif`, `NSFW gifleri atar.`)
  .addField(`› ${prefix}anal`, `Anal ile ilgili gifler atar.`)
  .addField(`› ${prefix}ass`, `ASS resimleri atar.`)
  .addField(`› ${prefix}pussy`, `Pussy resimleri atar.`)
  .addField(`› ${prefix}hentai`, `Hentai resimleri/gifleri atar.`)
  .addField(`› ${prefix}4k`, `4K gifler atar.`)
.setColor(client.ayarlar.renk)
message.channel.send(embedyardim)
 




};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nsfw',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
}
