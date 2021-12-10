const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    order:[
      ['created_at', 'DESC']
  ],
  },
  {
    sequelize
  }
);

module.exports = Post;
