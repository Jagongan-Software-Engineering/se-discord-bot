module.exports = (client,message)=>{
    require('../commands/information/ping').ping(client,message);
    require('../commands/information/avatar').avatar(client,message);
    require('../commands/fun/meme').meme(client,message);
    require('../commands/fun/komiku').komiku(client,message);
}