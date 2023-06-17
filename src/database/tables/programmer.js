import sequelize  from "sequelize";
import database from "../db.js";

const programmer = database.define('programmer', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    python: {
        type: sequelize.BOOLEAN,
        allowNull: false
    },
    javascript: {
        type: sequelize.BOOLEAN,
        allowNull: false
    },
    java: {
        type: sequelize.BOOLEAN,
        allowNull: false
    }
});

export default programmer