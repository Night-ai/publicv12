const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let user = client.users.get(args.slice(0).join(' '));
  if (!user) {
    let e = new Discord.RichEmbed()
  .setColor(client.ayarlar.renk)
    .setDescription("<:hata:637685816197382165> Lütfen kara listeye almak istediğin kullanıcının ID'sini yazın!")
    message.channel.send({embed: e})
    return;
  };
  
  if (db.has(`karalist_${user.id}`) === true) return message.reply("<:hata:637685816197382165> Bu kullanıcı zaten kara listede bulunuyor!");
  
  db.set(`karalist_${user.id}`, "aktif")
  
   message.channel.send(`<:moly_check:637743464381153321> Başarıyla <@${user.id}> adlı kullanıcıyı kara listeye aldım.`)
    
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 5,
    kategori: "yapımcı"
};

exports.help = {
  name: "karaliste",
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "karaliste <kullanıcı ID>"
};