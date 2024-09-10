"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Telefone extends Model {
    static associate(models) {
      Telefone.hasMany(models.Usuario, {
        foreignKey: "id_telefone",
      });
    }
  }
  Telefone.init(
    {
      telefone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Telefone",
      tableName: "telefones",
    }
  );
  return Telefone;
};
