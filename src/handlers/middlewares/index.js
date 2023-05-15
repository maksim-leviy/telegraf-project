const { Composer } = require('telegraf') 

const i18next = require('./i18next')

module.exports = new Composer(
  i18next
)
