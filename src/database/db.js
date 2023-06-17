import { Sequelize } from "sequelize";

const database = new Sequelize({
    dialect: 'sqlite',
    storage: './database/storage/database.squelite'
});

export default database