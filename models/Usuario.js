let Usuario = (sequelize, DataTypes) => {
    return sequelize.define(
        'Usuario', // <== primeiro param: Nome do model
        { 
            // <== segundo param: Colunas da minha tabela...
            id:{
                type: DataTypes.INTEGER,
                primaryKey:true,
                allowNull: false,
                autoIncrement: true
            },
            nome:{
                type: DataTypes.STRING,
                allowNull: false
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false
            },
            senha:{
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: "usuarios",
            timestamps: false,
        }
    )
}

module.exports = Usuario;