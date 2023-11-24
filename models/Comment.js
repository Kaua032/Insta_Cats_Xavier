const { DataTypes } = require("sequelize");

const db = require("../db/conn.js");

//Importar as tabelas para o relacionamento
const User = require("./User");
const Publication = require("./Publication");

const Comment = db.define("Comment", {
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

Comment.belongsTo(User);
Comment.belongsTo(Publication);

User.hasMany(Comment);
Publication.hasMany(Comment);

module.exports = Comment;
