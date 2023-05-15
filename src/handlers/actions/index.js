const { Composer } = require('telegraf') 

const language = require('./language')

module.exports = new Composer(
  language
)
