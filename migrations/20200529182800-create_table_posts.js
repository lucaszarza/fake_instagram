'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'posts',
      {
        id:{
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        texto:{
          type:Sequelize.STRING(256),
          allowNull: false,
        },
        img:{
          type:Sequelize.STRING(256),
          allowNull: false,
        },
        usuarios_id: {
          type: Sequelize.INTEGER,
          references:{
            model:"usuarios",
            key:"id",
          },
          onDelete: "SET NULL",
          onUpdate: "CASCADE",
        },
        n_likes: {
          type: Sequelize.INTEGER,
          defaultValue:0
        }
      },{
        timestamps: 'true'
      });
    }, 
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts')
  }
};
