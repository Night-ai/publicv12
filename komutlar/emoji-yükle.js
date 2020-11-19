const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');


exports.run = async (client, message, args) => {

  
    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send(`Bunun için \`EMOJILERI YONET\` yetkisine sahip olman gerek.`).then(m => m.delete(5000).catch());
    message.delete().catch()
 if (!args[0]) return message.channel.send("Doğru Kullanım: `f?yükle emoji-linki emoji-adı`")
    if (!args[1]) return message.channel.send("Doğru Kullanım: `f?yükle emoji-linki emoji-adı`")
 if(message.guild.emojis.filter(e => e.animated).size == 50){

         return message.channel.send("<:hata:637685816197382165> Hareketli emoji eklemek için yeriniz kalmamış.")
         }else
         if(message.guild.emojis.filter(e => !e.animated).size == 50){

      
         return message.channel.send("<:hata:637685816197382165> Emoji eklemek için yeriniz kalmamış.");
         
         }
         if(message.guild.emojis.filter(e => e.name.toLowerCase() === args[1].toLowerCase()).size > 0){
            return message.channel.send(`${args[1]} adına sahip başka bir emoji var!`)
        }
         message.guild.createEmoji(args[0], args.slice(1).join(" ")).then(e => {
         
  
         return message.channel.send ("<:moly_check:637743464381153321> Başarıyla " + "**" + args[1] + "** adlı emoji yüklendi");
         message.channel.send ("<:moly_check:637743464381153321> Başarıyla " + "**" + args[1] + "** adlı emoji yüklendi").catch(error => {
             let e = new Discord.RichEmbed()
             .setColor(client.ayarlar.renk)
             .setTitle(`Hata.`)
             .setDescription(`
             **Hata Sebebleri Şunlardan Kaynaklı Olabilir;**
             1) Emoji boyutu 128 kb nin üstünde olabilir..
             2) Geçersiz link girmiş olabilirsiniz.
             `)
             return message.channel.send(e)
         });
    })  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["emojiyükle", "emoji-yükle"],
    permLevel: 0
    
  };
  
  exports.help = {
    name: 'yükle',
    description: 'Sunucu ayarlarını gösterir.',
    usage: 'ayarlar'
  };
