const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
if (msg.channel.type !== "text") return;
  
const limit = args[0];
  
  if(!limit) {
             msg.channel.send(`<:hata:637685816197382165> Yazma sınırını (süresini) kaç saniye olarak ayarlamak istediğinizi yazınız.`)
      
            return
          }
  
if (isNaN(limit)) {
  msg.channel.send(`<:hata:637685816197382165> Yazma sınırını (süresini) kaç saniye olarak ayarlamak istediğinizi yazınız.`)
      
    return
}
  
if (limit > 10) {
  msg.channel.send(`<:hata:637685816197382165> Yazma sınırı (süresi) maksimum **10** saniye olur.`)
      
    return
}
     msg.channel.send(`<:rf_check:642475879615823882> Yazma sınırı başarıyla **${limit}** saniye olarak ayarlanmıştır.`)

  
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 4,
    kategori: "moderasyon"
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Bulunduğunuz kanala yazma sınırı (süresi) ekler.',
  usage: 'yavaş-mod <1/10>',
};