const {Client, RichEmbed} = require('discord.js');
const client = new Client();
const Discord = require("discord.js");
var embed = new RichEmbed()

client.on('message', message => {                      
    if(!message.channel.guild) return;
    let args = message.content.split(" ")[1]
if(message.content.split(' ')[0] == 'bc') {
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**ليس لديك البرمشن المطلوب**') 
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       if(!args) return;
       message.channel.sendMessage('``هل أنت متأكد`` من انك تريد ارسال هذه الرسالة؟ اضغط على الصح اذا كنت متأكد من رسالتك').then(msg => {
        
        
        msg.react('✅')
       .then(() => msg.react('✅'))
     
     

       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                        
                               active.on("collect", r => {
                                       let args = message.content.split(' ').slice(1).join(' ');
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**●  اسم المرسل  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***●  اسم السيرفر  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
                               })
                                   })
                                   }
                                   });

client.login(process.env.TOKEN);
