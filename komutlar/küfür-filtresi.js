const Discord = require('discord.js');
const db = require('quick.db');
exports.run = function(client, message, args) {
//Komutun Kodları
  /*
  Functions
  */
  function stat(id){
    db.fetch(`kufur-engel_${id}`).then(i=>{
      var a = ""
      if(i === "acik"){
        var a = " **Açık** "
      }
      if(i === "kapali"){
        var a = " **Kapalı** "
      }
      if(!i){
        var a = "**Belirsiz**"
      }
      message.channel.send('Bu sunucuda küfür engel : '+a+'')
      //Gerisi bot.js de
    })
  }
  function close(state,id){
    if(!message.member.hasPermission('ADMINISTRATOR')) return err('**Yetersiz İzin**')
  db.set(`kufur-engel_${id}`,`${state}`);
    succesfully('**` küfür engel kapatma `**')
  }
  function err(err){
    if(!err) return;
    message.channel.send('Komut çalışırken bir hata oluştu : **`'+err+'`**')
  }
  function open(state,guildid){
    if(!message.member.hasPermission('ADMINISTRATOR')) return err('**Yetersiz İzin**')
  db.set(`kufur-engel_${guildid}`,`${state}`);
    succesfully('**`küfür engel açma`**')
    
  }
    function succesfully (operation){
      const succ = new Discord.RichEmbed()
      .setTitle('**<:moly_check:637743464381153321> Başarılı.**')
      .setDescription('Sunucuda '+operation+' işlemi başarılı oldu.')
      .setColor('#01CFFE')
      message.channel.sendEmbed(succ)
      
    }
  /////////////////////
  //Codes
  if(args[0]){
    const re = args.join(' ');
    if(re === "aç"){
    open('acik',message.guild.id);
    }
    else if (re === "kapat"){
      close('kapali', message.guild.id);
    }
    else if (re === "durum"){
      stat(message.guild.id);
    }
  }else{
    const emptyError = new Discord.RichEmbed()
    .setTitle('<a:sea:607190011095547914> **Hatalı Komut Girişi**')
    .setColor('#36393E')
    .setDescription('Lütfen ne yapmak istediğiniz yazın!\n` f?küfürengel aç` veya `f?küfürengel kapat`')
    message.channel.sendEmbed(emptyError).then( n=> n.delete(5000));
  }
};
exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ["küfür","küfürengel"],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 3 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};
exports.help = {
  name: 'küfürengel',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Küfür engeli açar ve kapar!',//Komutun Açıklaması
  category:'Sunucu',
  usage: 'küfürengel aç-kapa' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}