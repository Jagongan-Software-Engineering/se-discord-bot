const Discord = require('discord.js')

exports.avatar = (client,message) =>{
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
    if(message.content.startsWith('*avatar')){
        if(user){
            avatarEmbed    
            .setColor(0x333333)
            .setAuthor(user.username)
            .setDescription(`[Avatar URL](${user.displayAvatarURL({ size: 4096, dynamic: true })})`)
            .setImage(user.displayAvatarURL({ size: 4096, dynamic: true }).replace('.webp', '.png'));
            return message.channel.send(avatarEmbed);
        }
        return message.channel.send('Sorry none found with that name')
    }
}