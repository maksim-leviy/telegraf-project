const { Composer } = require('telegraf')

const { Klanguage } = require('../../utils/keyboards')

const composer = new Composer()

composer.command('language', async (ctx) => {
    return ctx.reply(
        ctx.i18next.t('language.menu'),
        Klanguage(ctx)
    )
})

module.exports = composer