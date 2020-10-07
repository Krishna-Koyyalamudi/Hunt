/**
*  user model
*  Describes the characteristics of each attribute in a user resource.
*
* @author Vikas Baswapuram <s538336@nwmissouri.edu>
* 
*
*/
'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    userName: {
      type: DataTypes.STRING,
      notEmpty: true,
      primaryKey: true,
      allowIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_login: DataTypes.DATE
  }, {});
  user.associate = function (models) {
    // associations can be defined here
  };
  return User;
};