"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "enderecos",
      [
        {
          
          rua: "Rua dos Deus",
          cidade: "manaus",
          estado: "Amazonas",
          cep: "690-45260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("enderecos", null, {});
  },
};
