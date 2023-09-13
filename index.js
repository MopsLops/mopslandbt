const mineflayer = require('mineflayer');

console.log('Starting...')

function createBot () {
    const bot = mineflayer.createBot({
    host: "g3.gamely.pro",
    port: "20103",
    username: "MOPSLAND_BOT",
    version: false
    })
    bot.on('login', function() {
      bot.chat('/register 123123123 123123123')
      bot.chat('/login 123123123 123123123')
      bot.chat('/server server2')
    })
}
createBot()