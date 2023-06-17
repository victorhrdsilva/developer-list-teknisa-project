import database from "../database/db.js";

const syncDatabase = async (req, res) => {
    const db = database;

    try {
        await db.sync();

        res.send(`Database sucessfully sync'ed`);
    } catch (errors) {
        res.status(STATUS_CODE.SERVER_ERROR).send(errors);
    };
};

export default syncDatabase