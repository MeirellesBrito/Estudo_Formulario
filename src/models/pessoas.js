"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      Pessoas.hasOne(models.Usuario, {
        foreignKey: "id_pessoas"
      });
    }
  }
  Pessoas.init(
    {
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      dataNasc: DataTypes.DATE,
      cpf: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoas",
      tableName: "pessoas",
    }
  );
  return Pessoas;
};
