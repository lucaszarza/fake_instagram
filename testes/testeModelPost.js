const { sequelize, Usuario, Post, Comentario } = require('../models');

Post.findByPk(1,
    {include:
        [
            {
                model:Usuario,
                as: 'usuario',
                include: 'posts',
                attributes: {
                    excludes:['senha']
                }
            },{
                model:Comentario,
                as:'comentarios',
                include:'autor'
            }
        ]
    }).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)

/**
 * Levantar todos os POST. De cada post trazes os 
 * comentarios e de cada comentario trazer o seu autor
 * Tambem trazer os posts do autor do post em questao
 * 
 * 
 * Levantar todos os POST. De Cada post trazer os comentários e
 * de cada comentário, trazer o seu autor
 * */
