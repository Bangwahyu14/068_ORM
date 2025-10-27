module.exports = (sequelize, DataTypes) => {
    const komik = sequelize.define("komik", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primarykey: true
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DatabaseError.STRING,
        },
        author: {
            type: DataTypes.STRING,
        }
    });
    return komik;
}