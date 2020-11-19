const Discord = require('discord.js'); 
const db = require('quick.db'); 

exports.run = async (client, message, args, params) => { 
  
const s = await db.fetch(`filtre_${message.guild.id}`);
const prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
const argss = args[0]
  
  
//if(s === null) return message.channel.send('Sunucunuzda hiç eklenmiş filtre bulunmuyor.')
  //if(s.length <= 0) return message.channel.send('Bu sunucuda filtre bulunmuyor.')
 
 
var embed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
   .setDescription(`Sunucuzda hiç eklenmiş fitre bulunmuyor.`) 
  if(db.fetch(`filtre_${message.guild.id}`) === null || db.fetch(`filtre_${message.guild.id}`).length <= 0) { message.channel.send(embed) } else {
        const davet = new Discord.RichEmbed()
       .setColor(client.ayarlar.renk)
       .setDescription(client.emojis.get("622384793191055370") + `| **Doğru Kullanım:** ${prefix}filtre-sil **youtube**`)
 var embed2 = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
   .setDescription(client.emojis.get("622384793191055370") + `| Silmek istediğiniz filtrenin ismini komut ile birlikte yazmanız gerek.`) 
        if(!args[0]) return message.channel.send(embed2)
var embed3 = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
   .setDescription(client.emojis.get(" 622384793191055370") + `| Sunucuda böyle bir filtre bulunmamakta.`)   
      if (!db.fetch(`filtre_${message.guild.id}`).includes(args[0])) return message.channe.send(embed3)

    
let x = args[0] 
let arr = []
db.fetch(`filtre_${message.guild.id}`).forEach(v => {
if (v !== x) {
arr.push(v)
}
})
  

db.set(`filtre_${message.guild.id}`, arr)

    var embed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
   .setDescription(client.emojis.get("619596371879657513") + `| Sunucudaki **${args[0]}** adlı kelime filtre listesinden silindi.`) 
    message.channel.send(embed)
  }
    
  

};

exports.conf = { 
  enabled: true, 
  guildOnly: false, 
  aliases: ['filtresil'], 
  permLevel: 4,
  kategori: "moderasyon",
 
}; 

exports.help = { 
  name: 'filtre-sil', 
  description: 'Sunucudan istediğiniz bir filtreyi silersiniz.', 
  usage: 'filtre-sil',
  
};