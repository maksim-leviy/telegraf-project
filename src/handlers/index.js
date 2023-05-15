const { Composer, session } = require('telegraf')

const middlewares = require('./middlewares')
const actions = require('./actions')
const commands = require('./commands')

module.exports = new Composer(
    session({
        defaultSession: () => ({
            locale: 'ru'
        })
    }),
    middlewares,
    actions,
    commands
)
