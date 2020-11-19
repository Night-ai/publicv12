const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let user = client.users.get(args.slice(0).join(' '));
  if (!user) {
    
     message.channel.send("<a:hayir:613715530494246912> Kara listeden kaldırmak istediğin kullanıcının ID'ini yaz")
   
    return;
  };
  
  if (db.has(`karalist_${user.id}`) === false) return message.reply("Bu kullanıcı kara listede değil")
  
  db.delete(`karalist_${user.id}`)
  

     message.channel.send(`<:rf_check:642475879615823882> Başarıyla ${user.id} adlı kullanıcıyı kara listeden çıkarttım.`)
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5,
    kategori: "yapımcı"
};

exports.help = {
  name: "beyazliste",
  description: "Belirtilen kullancıyı kara listeden çıkartır!",
  usage: "beyazliste <kullanıcı ID>"
};