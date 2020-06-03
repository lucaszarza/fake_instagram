'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'usuarios',
       { 
         id:{ 
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome:{
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        senha: {
          type: Sequelize.STRING(256),
          allowNull: false,
        }
        
      },{
        timestamps: 'true'
      });
    },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios')
  }
};
