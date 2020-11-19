const Discord = require('discord.js');
const fs = require('fs');

//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  
	//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  const db = require('quick.db');
  

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');

  const embed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(client.emojis.get("622384793191055370") + `| **Doğru Kullanım:** f?linkfiltresi <aç/kapat>`)
  
	if(secenekler.length < 1) return message.channel.send(embed);
	//if(secenekler === "aç" || "kapat") return message.channel.send(errembed);

  
	if (secenekler === "aç" || secenekler === "on") {
    
    var i = db.set(`linkE_${message.guild.id}`, "aktif")
    
    
	
  message.channel.send(`<:moly_check:637743464381153321> Link filtresi başarıyla açıldı.\n\nLink filtresi kapatmak isterseniz **${prefix}linkfiltresi kapat** yazmanız yeterlidir.`)
    
    /*let kufurEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8"));
 if(!kufurEngel[message.guild.id]){
		kufurEngel[message.guild.id] = {
			kufurEngel: "acik"
		  };
  };

		  fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(kufurEngel), (x) => {
        if (x) console.error(x)
      })*/

	};

	if (secenekler === "kapat" || secenekler === "off") {
    
    //var i = db.set(`linkE_${message.guild.id}`, "kapali")
    
    db.delete(`linkE_${message.guild.id}`)
    const em4bed = new Discord.RichEmbed()
    .setColor('36393F')
    .setDescription(client.emojis.get("622384595601457163") + `| Link filtresi başarıyla kapatıldı.`)
		message.channel.send(em4bed)
      
	};
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['link-filtresi'],
		permLevel: 4,
    kategori: "ayarlar",
	};
	  
	exports.help = {
		name: 'linkfiltresi',
		description: 'Link engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'linkengelle <aç/kapat>',
    

	};
