const Sequelize = require("sequelize");
const db = require("../db");

const Card = db.define("card", {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  genre: {
    type: Sequelize.ENUM("AL", "BK", "FA", "TV", "MV", "PM", "SG", "OT"),
    allowNull: false,
  },
});

module.exports = Card;
