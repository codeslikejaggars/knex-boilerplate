module.exports = {
    async up (knex) {
      await knex.schema.createTable('users', table => {
        table.bigIncrements('id').primary().unsigned()
        table.string('email', 100).index().notNullable()
        table.timestamps()
      })
    },
  
    async down (knex) {
      await knex.schema.dropTable('users')
    }
  }
  