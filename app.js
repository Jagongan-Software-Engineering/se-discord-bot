const Discord = require('discord.js'),
client = new Discord.Client();
require('dotenv').config();

client.on('ready',()=>require('./src/events/ready')(client))
client.on('guildMemberAdd',(member)=>require('./src/events/guildMemberAdd')(member))
client.on('message',async(message) => {
    try {
        await require('./src/events/message')(client,message)
    } catch (error) {
        console.log(error);
    }
})
client.login(process.env.TOKEN)