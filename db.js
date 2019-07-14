const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://andrew:secret@localhost:5432/auth-db'
const sequelize = new Sequelize(databaseUrl)

sequelize
  .sync()
  .then(() => console.log('Database schema has been updated'))
  .catch(console.error)

module.exports = sequelize