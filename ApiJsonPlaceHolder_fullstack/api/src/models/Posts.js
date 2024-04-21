const { DataTypes, Op } = require("sequelize");
const { sequelize } = require("../db.js");

/* 
https://jsonplaceholder.typicode.com/users/1/posts
userId": 1,
"id": 2,
"title": "qui est esse",
"body"

*/

const Posts = sequelize.define(
  "Posts",
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,

      // autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },

    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,

      // autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },

    title: {
      type: DataTypes.STRING,
      allowNull: true,
      /*    allowNull: true,
       unique: true, */
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
      /*  unique: true, */
    },

    /* con esto diferencio lo de lo creado por mi */
    createInDB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }
  /*  {
      timestamp: true,
    } */
);

module.exports = Posts;

/* 
 id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      // autoIncrement: true,
      //  defaultValue: DataTypes.UUIDV4,
      //allowNull: false,

      // autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },

*/
