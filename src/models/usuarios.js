"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.belongsTo(models.Email, {
        foreignKey: "id_email",
      });
      Usuario.belongsTo(models.Telefone, {
        foreignKey: "id_telefone",
      });
      Usuario.belongsTo(models.Pessoas, {
        foreignKey: "id_pessoas",
      });
      Usuario.belongsTo(models.Enderecos, {
        foreignKey: "id_endereco",
      });
    }
  }
  Usuario.init(
    {
      data: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "usuarios",
    }
  );
  return Usuario;
};
