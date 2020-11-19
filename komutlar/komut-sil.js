const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {

 let prefix = client.ayar.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix

	if(!args[0]) {
    const embed65 = new Discord.RichEmbed()
    .setDescription("<:hata:637685816197382165> Lütfen silmek istediğiniz özel komutu yazın.")
    .setColor(client.ayarlar.renk)

		message.channel.send(embed65)
		return
	}

	const komut = args.join(" ")
  
	let komutlar = client.cmdd
	if(komutlar[message.guild.id]) {
		if(komutlar[message.guild.id].length === 1) {
			if(Object.keys(komutlar[message.guild.id][0])[0].toString() === komut) {
				delete komutlar[message.guild.id]
				fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
					console.log(err)
				})

  message.channel.send("<:moly_check:637743464381153321> Başarıyla " + komut + " adlı özel komutu sildim.")

				return
			}
		}
		for (var i = 0; i < komutlar[message.guild.id].length; i++) {
			if(Object.keys(komutlar[message.guild.id][i])[0].toString() === komut) {
				komutlar[message.guild.id].splice(i, 1);
 message.channel.send("<:moly_check:637743464381153321> Başarıyla " + komut + " adlı özel komutu sildim.")

				fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
					console.log(err)
				})
				return
			}
		}
	} else if (!komutlar[message.guild.id]) {
    const embed65 = new Discord.RichEmbed()
    .setDescription(client.emojis.get("622384793191055370") + "Sunucuda hiç özel komut bulunmuyor.")
    .setColor(client.ayarlar.renk)

		message.channel.send(embed65)
		return
	}
  
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['komutsil'],
	permLevel: 4,
	kategori: 'moderasyon'
}

exports.help = {
	name: 'komut-sil',
	description: 'Sunucu içindeki özel komutlardan belirtilen özel komutu siler.',
	usage: 'komut-sil [komut]'
}