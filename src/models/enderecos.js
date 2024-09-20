"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Enderecos extends Model {
    static associate(models) {
      Enderecos.hasOne(models.Usuario, {
        foreignKey: "id_endereco",
         as: 'usuario'
      });
    }
  }
  Enderecos.init({
    rua: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    cep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enderecos',
    tableName: 'enderecos'
  });
  return Enderecos;
};