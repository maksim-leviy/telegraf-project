require('dotenv').config()

const { Telegraf } = require('telegraf')
const handlers = require('./handlers')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(handlers)

bot.launch().catch((error) => console.log(error))

process.once('SIGINT', () => bot.stop())
process.once('SIGTERM', () => bot.stop())