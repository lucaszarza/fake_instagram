'use strict';

const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuarios',
      [
        {
          id:1,
          nome: "Jhon Doe",
          email: "jhon@hotmail.com",
          senha: bcrypt.hashSync('123456',10)
        },
        {
          id:2,
          nome: "Matheus",
          email: "matheus@hotmail.com",
          senha: bcrypt.hashSync('123456',10)
        },
        {
          id:3,
          nome: "Xavier Chico",
          email: "chico@hotmail.com",
          senha: bcrypt.hashSync('123456',10)
        },
        {
          id:4,
          nome: "Adamastor Reinaldo",
          email: "a.reinaldo@hotmail.com",
          senha: bcrypt.hashSync('123456',10)
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};
