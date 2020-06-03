'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'posts',
      [
        {
          texto: "Ta linda! Linda, ta linda viu?!",
          img: 'imagens....',
          usuarios_id:1
        },
        {
          texto: "Lorem Ipsum... Dolor etc.",
          img: 'imagens....',
          usuarios_id:1,
          n_likes: 3,
        },
        {
          texto: "Dorime! AMENO",
          img: 'imagens....',
          usuarios_id:3,
        },
        {
          texto: "Turma da XUXA",
          img: 'imagens....',
          usuarios_id:1,
          n_likes: 10,
        },
        
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
