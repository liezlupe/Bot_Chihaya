process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
const emoji = require('node-emoji');
const dbot = require('dbot-js');
const token = "560832955:AAHev6kUhVZ8fKQa38sNrOXXpsOmFTvA9BU";
const bot = new TelegramBot(token, {polling: true});

 bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    var message = msg.text.toString();
    dbot.get_response(message, function(err, result){
        if(!err) {
            bot.sendMessage(chatId, result)
        }else{
            console.log(err)
        }
    });
});