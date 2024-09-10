"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "pessoas",
      [
        {
          nome: "John",
          sobrenome: "Doe",
          dataNasc: new Date('1990-01-01'),
          cpf:"0335878888",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pessoas", null, {});
  },
};