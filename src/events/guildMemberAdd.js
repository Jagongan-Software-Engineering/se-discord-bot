module.exports = (member)=>{
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
    return channel.send(`Welcome to the Server ${member}`)
}