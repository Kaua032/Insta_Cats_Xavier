// 1º importar DataTypes Sequelize
const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

//2º Importar arquivo de connect database
const db = require("../db/conn.js");

// 3º Estruturar essa tabela
const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

User.addHook("beforeCreate", async (user) => {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
});

module.exports = User;
