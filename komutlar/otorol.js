const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');
//let rol = JSON.parse(fs.readFileSync("././jsonlar/otoR.json", "utf8"));

exports.run = async (client, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  const db = require('quick.db');

  
  let role = message.mentions.roles.first() //|| message.guild.roles.find(r => r.name === args.slice(0).join(' '));
  
    if (!role) {
        return message.channel.send("<:hata:637685816197382165> Lütfen komutla birlikte otomatik verilmesini istediğiniz rolü etiketleyin.")
    }

    /*if(!rol[message.guild.id]){
        rol[message.guild.id] = {
            otoRol: role.id
        };
    }
    fs.writeFile("././jsonlar/otoR.json", JSON.stringify(rol), (x) => {
        if (x) console.error(x)
      })*/
  
     db.set(`otoR_${message.guild.id}`, role.id)
  
  

    message.channel.send("<:moly_check:637743464381153321> Otorol sistemi başarıyla aktif edilmiştir.")
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['otorol', 'otorol-ayarla'],
    permLevel: 3,
    kategori: "ayarlar",
  category: "settings"
}

exports.help = {
    name: 'oto-rol-ayarla',
    description: 'Sunucuya birisi katıldıgında verilecek rolü ayarlar.',
    usage: 'oto-rol-ayarla <@rol>',
  enname: 'set-auto-role',
  endescription: 'The sets the role to be given when someone joins.',
  enusage: 'set-auto-role <@role>'
}