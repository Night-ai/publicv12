const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');


exports.run = async (client, msg, args) => {
    
        if(!msg.member.hasPermission("MANAGE_EMOJIS")) {

    
          return msg.channel.send("<:hata:637685816197382165> Bu komutu kullanmak için **Emojileri Yönet** yetkisi ne sahip olman gerek.")
        }

        if(!msg.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) {
            return msg.channel.send("<:hata:637685816197382165> Bu komutu kullanmak için **Emojileri Yönet** yetkisi ne sahip olman gerek.")
        }

        if(!args[0]) {

            return msg.channel.send("<:hata:637685816197382165> Silmek istediğiniz emojinin ismini yazmanız gerekiyor.")
        }

        const { id } = Discord.Util.parseEmoji(args[0])

        let emoji = msg.guild.emojis.get(id) || msg.guild.emojis.find(emoji => emoji.name === args[0])

        if(!emoji) {
     
           return msg.channel.send("<:hata:637685816197382165> Sunucuda böyle bir emoji bulunmuyor!")
        }

        msg.guild.deleteEmoji(emoji)
     
        msg.channel.send(`<:moly_check:637743464381153321> Belirtilen emoji başarıyla silindi.`)
    
        }
    




exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["emojisil", "emoji-sil"],
    permLevel: 0
    
  };
  
  exports.help = {
    name: 'emojidelete',
    description: 'Sunucu ayarlarını gösterir.',
    usage: 'ayarlar'
  };
