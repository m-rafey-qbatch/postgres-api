const Sequelize = require('sequelize');
const db = require('../config/database');

const Person = db.define('person', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
});

Person.sync().then(() => {
  console.log('Person Table Created');
});
module.exports = Person;






