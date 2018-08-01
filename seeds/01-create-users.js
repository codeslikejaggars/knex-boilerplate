const User = require('../models/User')

async function createMany (type, items = []) {
  return Promise.all(items.map(item => type.forge(item).save()))
}

module.exports = {
  async seed (knex) {
    await createMany(User, [
      { email: 'moe@example.org'},
      { email: 'curly@example.org' }
    ])
  }
}
