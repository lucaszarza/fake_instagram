const { sequelize, Usuario } = require('../models');
// Usuario.create({nome:"Micael",email:"micael@teste.com",senha:"teste"}).then(
//     (u) => {
//         console.log(u.toJSON());
//     }
// )

Usuario.findByPk(1,{include:'posts'})
.then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)


// Usuario.create({nome:"Ádrian",email:"teste@teste.com",senha:"semcriptografar"});

// Usuario.findAll({include:'posts'}).then(
//         data => {
//             console.log(data.map( u => u.toJSON()));
//             console.log(data[0].posts[0].texto);
//             sequelize.close();
//         }
//     )

// Usuario.update({senha:"perguntadoleo"},{where:{id:5}})
// .then(
//     () => {sequelize.close();}
// )
