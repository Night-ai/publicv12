const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const Cleverbot = require('cleverbot.io');
var bot = new Cleverbot('kvISf25WAVOV1H0i','CpkqsZcDKitBygg8kIf38qA3KmmNLwqm');
const db = require("quick.db");

exports.run = async (client, message, params) => {

bot.setNick('Real Fox');
let yazi = params.slice(0).join(' ');
 if (yazi.length < 1) return message.reply('Bir mesaj yazmalısın.');
   message.channel.send(`<a:yukleniyor:637525668573478912> Sorduğunuz soru analiz ediliyor...`).then(msg => msg.delete(1000));

    
      
      message.channel.send("<:rf_xmark:642475975761723432>  Bir hata meydana geldi. Bu hatanın bot ile bir alakası yoktur.")
   

}
  


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'sor',
  usage: 'sor'
};