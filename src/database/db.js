import sequelize from "sequelize";

const database = new sequelize({
    dialect: 'sqlite',
    storage: './database/storage/database.squelite'
});

export default database