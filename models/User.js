const bookshelf = require('./bookshelf')
// User data
class User extends bookshelf.Model {
  get tableName () { return 'users' }
  get hasTimestamps () { return true }

  static getUsers (ids = []) {
    return User.where('id', 'in', ids).fetchAll()
  }
}

module.exports = User
