const { Composer } = require('telegraf')
const { i18next } = require('telegraf-i18next')

const locales = require('../../locales')

const composer = new Composer()

composer.use(i18next({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: true,
    resources: locales
}))

module.exports = composer
