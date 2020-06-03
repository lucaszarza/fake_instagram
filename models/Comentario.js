const Comentario = (sequelize,DataTypes) => {
    let comentario = sequelize.define(
        'Comentario',

        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey:true,
                allowNull: false,
                autoIncrement: true
            },
            texto:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            usuarios_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            posts_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
            }

        },

        {
            tableName:"comentarios",
            timestamps:true
        }
    );

    comentario.associate = (models) => {
        comentario.belongsTo(models.Usuario,{foreignKey:"usuarios_id", as:"autor" });

    }

    return comentario;
}

module.exports = Comentario;