const Discord = require('discord.js')
const AxiosService = require('../../helpers/axiosService')

exports.meme = async(client,message) =>{
    if(message.content === '*meme'){
        try {
            const m = await message.channel.send('Wait a sec, your meme will appears')
            const apiResponse = await AxiosService('https://meme-api.herokuapp.com/gimme');
            const attachment = new Discord.MessageAttachment(apiResponse.url);
            await m.delete({timeout:m.createdTimestamp - message.createdTimestamp})
            return message.reply(`here's your meme`,attachment)
        } catch (error) {
            return message.channel.send(`Failed to Get Meme [${error}]`)
        }
    }
}