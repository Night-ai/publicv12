const Discord = require('discord.js')
const fs = require('fs')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  let prefix = client.ayar.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix

	const customArgs = args.join(' ').split(" - ")
  let x = customArgs[1]
  
	if(!customArgs[0]) {
    const embed65 = new Discord.RichEmbed()
    .setDescription(client.emojis.get("619596371674005515") + " Lütfen eklemek istediğiniz komutu **yazın**. \n<:yasak:619596371674005515> Örnek : **`"+prefix+"komut-ekle komut - açıklama`**")
    .setColor(client.ayarlar.renk)
		message.channel.send(embed65)
		return
	}

	if(!customArgs.slice(1).join(" - ")) {
    const embed65 = new Discord.RichEmbed()
    .setDescription(client.emojis.get("619596371674005515") + "| Lütfen komut açıklamasını **yazın**. \n<:yasak:619596371674005515> Örnek : **`"+prefix+"komut-ekle komut - açıklama`**")
    .setColor(client.ayarlar.renk)
		message.channel.send(embed65)
		return
	}

	if (client.commands.has(customArgs[0]) || client.aliases.has(customArgs[0])) {
		const embed65 = new Discord.RichEmbed()
    .setDescription(client.emojis.get("619596371674005515") + "| Botun var olan bir komutunu özel komut olarak **ekleyemezsiniz**.")
    .setColor(client.ayarlar.renk)
    message.channel.send(embed65)
		return
	}

	var array = []
	var kontrol2 = []
	let komutlar = client.cmdd
	var altkomut = ''

	if(komutlar[message.guild.id]) {
		for (var i = 0; i < Object.keys(komutlar[message.guild.id]).length; i++) {
			if(customArgs[0] === Object.keys(komutlar[message.guild.id][i])[0].toString()) {
				array.push(JSON.parse(`{"${Object.keys(komutlar[message.guild.id][i])[0]}": "${customArgs.slice(1).join(" - ").replace("\n", "\\n")}"}`))
			} else {
				array.push(JSON.parse(`{"${Object.keys(komutlar[message.guild.id][i])[0]}": "${komutlar[message.guild.id][i][Object.keys(komutlar[message.guild.id][i])].replace("\n", "\\n")}"}`))
			}
			kontrol2.push(Object.keys(komutlar[message.guild.id][i])[0].toString())
		}
		if(!kontrol2.includes(customArgs[0])) {
			array.push(JSON.parse(`{"${customArgs[0]}": "${customArgs.slice(1).join(" - ").replace("\n", "\\n")}"}`))
			komutlar[message.guild.id] = array

			fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
				console.log(err)
			})

			const embed = new Discord.RichEmbed()
				.setAuthor("Yeni özel komut oluşturuldu!")
			  .setDescription(client.emojis.get("619596371879657513") + `| Artık \`${prefix}${customArgs[0]}\` yazdığınızda bot \`${customArgs.slice(1).join(" - ")}\` olarak karşılık verecektir.`)
				.setColor(client.ayarlar.renk)
			message.channel.send({embed})
			return
		} else {
			komutlar[message.guild.id] = array

			fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
				console.log(err)
			})

			const embed = new Discord.RichEmbed()
				.setAuthor(`${customArgs[0]} adlı özel komut güncellendi!`)
				.setDescription(client.emojis.get("619596371879657513") + `| Artık \`${prefix}${customArgs[0]}\` yazdığınızda bot \`${customArgs.slice(1).join(" - ")}\` olarak karşılık verecektir.`)
				.setColor(client.ayarlar.renk)
			message.channel.send({embed})
			return
		}
	} else {
		array.push(JSON.parse(`{"${customArgs[0]}": "${customArgs.slice(1).join(" - ")}"}`))
		komutlar[message.guild.id] = array

		fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
			console.log(err)
		})

		const embed = new Discord.RichEmbed()
			.setAuthor("Yeni özel komut oluşturuldu!")
			.setDescription(client.emojis.get("619596371879657513") + `| Artık \`${prefix}${customArgs[0]}\` yazdığınızda bot \`${customArgs.slice(1).join(" - ")}\` olarak karşılık verecektir.`)
			.setColor(client.ayarlar.renk)
		message.channel.send({embed})
		return
	}
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['komutekle', 'komut-ekle', 'komutoluştur'],
	permLevel: 4,
	kategori: 'moderasyon'
}

exports.help = {
	name: 'komut-oluştur',
	description: 'Sunucunuza özel komut ekler.',
	usage: 'komut-ekle [komut] - [açıklama]'
}