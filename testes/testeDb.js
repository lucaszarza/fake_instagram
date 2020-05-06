const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const dbConn = new Sequelize(dbConfig);

// dbConn.query("select * from usuarios", Sequelize.QueryTypes.SELECT)
// .then(
//     data => {
//         console.log(data);
//         dbConn.close();
//     }
// );

// console.log('Teste!!!');

async function testeDb(){
    let usuarios = await dbConn.query("select * from usuarios", Sequelize.QueryTypes.SELECT);
    console.log(usuarios);
}

testeDb();
console.log("teste!");
