# Knex boilerplate

Barebones project to setup a knex-driven sqlite database.

## Usage

Install dependencies with: `npm install`

Create the database and initial tables with: `npm run db:migrate`

Seed initial records with: `npm run db:seed`

Check the contents of the users table database: `sqlite3 db.sqlite 'select * from users;'` 