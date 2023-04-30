const { Markup } = require('telegraf')
const i18next = require('i18next')

const Klanguage = (ctx) => {
    let locales = Object.keys(i18next.options.resources)

    return Markup.inlineKeyboard(
        locales.map((locale) => Markup.button.callback(
            ctx.i18next.t(`language.${locale}.emoji`),
            'language:' + locale
        ))
    )
}

module.exports = { Klanguage }