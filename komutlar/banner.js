const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  
    const arkaplan = args.slice(0).join("+");


  
  
  
  const yazi = args.slice(0).join("+");

  if (!yazi) return message.channel.send(`Lütfen yazı yazın!`);
  const linqo = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yazi}`.replace(
    " ",
    "+"
  );

  const embed = new Discord.RichEmbed()
    .setTitle("Banneriniz")
   .setColor(client.ayarlar.renk)
    .setImage(linqo)
    .setFooter("Banneriniz Real Fox tarafından başarıyla oluşturuldu.");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
kategori : 'eğlence'
};

exports.help = {
  name: "banner",
  description: "Yazdığınız yazıyı bannera çevirir.",
  usage: "banner <yazı>"
};