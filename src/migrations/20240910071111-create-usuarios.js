"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_email: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "email", key: "id" },
      },
      id_telefone: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "telefones", key: "id" },
      },
      id_pessoas: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "pessoas", key: "id" },
      },
      id_endereco: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "enderecos", key: "id" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuarios");
  },
};
