const { Composer, session } = require('telegraf')

const { i18next } = require('./middlewares')
const { language: Alanguage } = require('./actions')
const { language: Clanguage } = require('./commands')

const composer = new Composer()

composer.use(session({
    defaultSession: () => ({
        locale: 'ru'
    })
}))

composer.use(i18next)
composer.use(Alanguage)
composer.use(Clanguage)

module.exports = composer