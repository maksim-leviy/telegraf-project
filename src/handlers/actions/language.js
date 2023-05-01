const { Composer } = require('telegraf')

const { Klanguage } = require('../../utils/keyboards')

const composer = new Composer()

composer.action(/language:([^]+)/, async (ctx) => {
    let language = ctx.match[1]
    if (language === ctx.session.locale) return ctx.answerCbQuery(ctx.i18next.t('language.error'))

    ctx.i18next.changeLanguage(language)

    return ctx.editMessageText(ctx.i18next.t('language.menu'), Klanguage(ctx))
})

module.exports = composer
