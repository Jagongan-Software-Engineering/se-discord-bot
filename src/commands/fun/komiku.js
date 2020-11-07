const Discord = require('discord.js')
const AxiosService = require('../../helpers/axiosService')

exports.komiku = async(client,message) => {
    if(message.content === '*manga'){
        try {
            let page = 1
            const response = await AxiosService(`https://mangamint.kaedenoki.net/api/manga/page/${page}`)
            const mangaList = []
            const m = await message.channel.send('Chotto a sec...')
            await Promise.all(
                response.manga_list.map(manga =>{
                    mangaList.push({
                        name: `title : ${manga.title}`,
                        value: `id : ${manga.endpoint}`
                    })
                })
            )
            let embed = new Discord.MessageEmbed()
            .setColor(0x333333)
            .setTitle('List Manga')
            // .setDescription(mangaList)
            .addFields(mangaList)
            .setFooter('Usage -> use [id] to get detail manga [*manga detail {id}]')
            await m.delete({timeout:m.createdTimestamp - message.createdTimestamp})
            message.reply('List Manga',embed)
        } catch (error) {
            message.channel.send(`Something wrong when fetch API [${error}]`)
        }
    }
}