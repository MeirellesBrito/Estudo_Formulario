"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    static associate(models) {
      Email.hasOne(models.Usuario, {
        foreignKey: "id_Email"
      });
    }
  }
  Email.init(
    {
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Email",
      tableName: "email",
    }
  );
  return Email;
};
