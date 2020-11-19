const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komut için `Yönetici` izni **gerekiyor!**')
  if (!args[0]) return message.channel.send('**[**`aç`**veya** `kapat`**]** Yazmalısın!')
  
  if (args[0] == 'aç') {
    if (db.has(`renk_${message.guild.id}`)) return message.channel.send('Bu Sunucuda **Renk Sistemi** Zaten Açık!')
    let siyah
    let kırmızı
    let yeşil
    let sarı
    let turuncu
    let mor
    try{
      siyah = await message.guild.createRole({
        name: `Siyah`,
        color: "#0f0f0f",
        permissions:[]
      })
      kırmızı = await message.guild.createRole({
        name: `Kırmızı`,
        color: "#c11111",
        permissions:[]
      })
      yeşil = await message.guild.createRole({
        name: `Yeşil`,
        color: "#18ad29",
        permissions:[]
      })
      sarı = await message.guild.createRole({
        name: `Sarı`,
        color: "#e0dc0b",
        permissions:[]
      })
      turuncu = await message.guild.createRole({
        name: `Turuncu`,
        color: "#e5b806",
        permissions:[]
      })
      mor = await message.guild.createRole({
        name: `Mor`,
        color: "#7f0bba",
        permissions:[]
      })
    }catch (e){
      return message.channel.send('Gerekli rolleri ve izinleri **oluşturamıyorum.** Lütfen yetkimin tam olduğundan emin olun.')
    }
    
    message.guild.createChannel("Ares - Renk Sistemi", "text").then(async o => {
      let role = message.guild.roles.find("name", "@everyone");
       await o.overwritePermissions(role, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: false,
         ADD_REACTIONS: false
     })
    
      await db.set(`renk_${message.guild.id}`, 'acik')
      await db.set(`renksiyah_${message.guild.id}`, siyah.id)
      await db.set(`renkkırmızı_${message.guild.id}`, kırmızı.id)
      await db.set(`renkyeşil_${message.guild.id}`, yeşil.id)
      await db.set(`renksarı_${message.guild.id}`, sarı.id)
      await db.set(`renkturuncu_${message.guild.id}`, turuncu.id)
      await db.set(`renkmor_${message.guild.id}`, mor.id)
      o.send('Aşağıdaki emojiye tıklayarak renk alabilirsiniz! \n ``Sadece 1 Renk seçin Aksi taktirde diğer renk görünmez.``').then(async m => {
        await db.set(`renkmesaj_${message.guild.id}`, m.id)
        m.react('🖤')
        m.react('🧡')
        m.react('💚')
        m.react('💛')
        m.react('📙')
        m.react('💜')
      })
      message.channel.send('Başarıyla **Renk Sistemi** kuruldu!')
    })
  } else if (args[0] == 'kapat') {
    if (!db.has(`renk_${message.guild.id}`)) return message.channel.send('Bu sunucuda **Renk Sistemi** zaten kapalı!')
    let bos;
    let u = await db.fetch(`renksiyah_${message.guild.id}`)
    let o = await message.guild.roles.get(u)
    let uh = await db.fetch(`renkkırmızı_${message.guild.id}`)
    let om = await message.guild.roles.get(uh)
    let uhm = await db.fetch(`renkyeşil_${message.guild.id}`)
    let omg = await message.guild.roles.get(uhm)
    let uhn = await db.fetch(`renksarı_${message.guild.id}`)
    let omn = await message.guild.roles.get(uhn)
    let uhi = await db.fetch(`renkturuncu_${message.guild.id}`)
    let omi = await message.guild.roles.get(uhi)
    let ul = await db.fetch(`renkmor_${message.guild.id}`)
    let ol = await message.guild.roles.get(ul)
    await o.delete()
    await om.delete()
    await omg.delete()
    await omn.delete()
    await omi.delete()
    await ol.delete()
    await db.delete(`renk_${message.guild.id}`)
    await db.delete(`renksiyah_${message.guild.id}`)
    await db.delete(`renkkırmızı_${message.guild.id}`)
    await db.delete(`renkyeşil_${message.guild.id}`)
    await db.delete(`renksarı_${message.guild.id}`)
    await db.delete(`renkturuncu_${message.guild.id}`)
    await db.delete(`renkmor_${message.guild.id}`)
    await db.delete(`renkmesaj_${message.guild.id}`)
    message.channel.send('Renk Sistemi başarıyla **kapatıldı!**')
  } else return message.channel.send('**[**`aç`**veya** `kapat`**]** Yazmalısın!')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'renk-sistemi',
  description: '',
  usage: ''
};
 