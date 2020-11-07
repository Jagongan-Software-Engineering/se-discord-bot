const Discord = require('discord.js')

exports.ping = async (client,message)=>{
    if(message.content === '*ping' || message.content === '*Ping'){
        try {
            const m = await message.channel.send('Pinging...!!')
            const embed = new Discord.MessageEmbed()
            .addField("⌛", `**${m.createdTimestamp - message.createdTimestamp}ms**`)
            .addField("💓", `**${Math.floor(client.ws.ping)}ms**`)
            await m.delete({timeout:m.createdTimestamp - message.createdTimestamp})
            return message.reply('💁‍♂️',embed)
        } catch (error) {
            return message.channel.send(`error : ${error}`)
        }
    }
}