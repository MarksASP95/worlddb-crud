const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize('world', 'root', 'ronaldo', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const dir = path.join(__dirname, 'models');

fs.readdirSync(dir).forEach(filename => {
    const modelDir = path.join(dir, filename);
    const model = sequelize.import(modelDir);
    module.exports[model.name] = model;
})

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;


/* const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'world'
});

conn.connect( err => {
    if(err) {
        throw err;
    }
}); */