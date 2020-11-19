const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
  message.delete(3000)
//    if (!user) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('#7289DA').setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL).setAuthor("HATA").setDescription(`Kimi banlayacağımı yazmalısın.`)).then(m => m.delete(8000))
  
      if (!args [0]) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('#7289DA').setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL).setAuthor("HATA").setDescription(`Reklam kick açmak için !reklamkick aç kapatmak için !reklamkick kapat`)).then(m => m.delete(8000))
    if (args[0] == 'aç') {
        db.set(`reklamkick_${message.guild.id}`, 'acik')
        message.channel.send("<:moly_check:637743464381153321> Reklam kick sistemi başarıyla aktif edildi.").then(m => m.delete(8000))
    }
    if (args[0] == 'kapat') {
        db.set(`reklamkick_${message.guild.id}`, 'kapali')
 return message.channel.send("<:moly_check:637743464381153321> Reklam kick sistemi başarıyla kapatıldı.").then(m => m.delete(8000))}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reklam-kick'],
    permLevel: 4
};
exports.help = {
    name: 'reklamkick',
    description: '',
    usage: ''
};
