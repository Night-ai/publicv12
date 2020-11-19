const Discord = require('discord.js'); 
const db = require('quick.db'); 

exports.run = async (client, message, args, params) => { 
  
const filtreler = await db.fetch(`filtreK_${message.guild.id}_${args[0]}`)
  
  //if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`); 
    var embed2 = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
   .setDescription(client.emojis.get("619596371674005515") + `Lütfen yasaklamak istediğiniz **kelimeyi** giriniz.`) 
  if (!args[0]) return message.channel.send(embed2)
  var embed3 = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
   .setDescription(client.emojis.get("619596371674005515") + ` Zaten böyle bir filtre **bulunmakta**.`) 
  if(filtreler == args[0]) return message.channel.send(3)
    var embed5 = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
   .setDescription(client.emojis.get("619596371674005515") + "Botun komudunu yasaklayamazsın.") 
  if (client.commands.get(args[0])) return message.channel.send(embed5)
  if (client.aliases.get(args[0])) return message.channel.send(embed5)
  
  //db.set(`komutkomuts_${message.guild.id}`, db.has(`komutkomuts_${message.guild.id}`) ? db.fetch(`komutkomuts_${message.guild.id}`) + 1 : 1)
  /*var i = db.set(`komutkomut_${message.guild.id}_${s}`, args[0])
  var a = db.set(`cevapcevap_${message.guild.id}_${s}`, args.slice(1).join(' '))*/
  
 let kelimeler = args[0]
  
  var a = db.push(`filtre_${message.guild.id}`, kelimeler)
 // db.set(`filtreK_${message.guild.id}_${args[0]}`, args[0])
  db.set(`filtreAK_${message.guild.id}`, "açık");
  //var a = db.push(`aciklama_${message.guild.id}`, args.slice(1).join(' '))

    var embed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
   .setDescription(client.emojis.get("619596371879657513") + `Başarıyla **${kelimeler}** adlı kelime filtre listesine **eklendi**.`) 
    message.channel.send(embed)
  
};

exports.conf = { 
  enabled: true, 
  guildOnly: false, 
  aliases: ['filtreekle', 'filtre-oluştur'], 
  permLevel: 4,
  kategori: "moderasyon",
 
}; 

exports.help = { 
  name: 'filtre-ekle', 
  description: 'Sunucuda bir kelimyei yasaklarsınız.', 
  usage: 'filtre-ekle <kelime>',
  
};