const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("room", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});
