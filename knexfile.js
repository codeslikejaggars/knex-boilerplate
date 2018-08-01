const path = require('path')

const defaultConfig = {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'db.sqlite')
    },
    useNullAsDefault: true
}

module.exports = {
  development: defaultConfig,
  production: defaultConfig
}
