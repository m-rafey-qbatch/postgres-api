const Sequelize = require("sequelize");
const db = require("../config/database");

const Student = db.define("student", {
  roll_no: {
    type: Sequelize.STRING,
  },
  class: {
    type: Sequelize.STRING,
  },
  marks: {
    type: Sequelize.STRING,
  },
});

Student.sync().then(() => {
  console.log("Student Table Created");
});
module.exports = Student;
