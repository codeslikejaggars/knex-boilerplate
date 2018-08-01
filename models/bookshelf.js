const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'development'])

const bookshelf = require('bookshelf')(knex)


module.exports = bookshelf
