import programmer from "../database/tables/programmer.js";
import { STATUS_CODE } from "../enums/statusCode.js";

const createProgrammer = async (req, res) => {
    const { name, python, javascript, java } = req.body;

    try {
        const newProgrammer = await programmer.create({
            name: name,
            python: python,
            javascript: javascript,
            java: java
        });

        res.status(STATUS_CODE.OK).send(newProgrammer);
    } catch (error) {
        res.status(STATUS_CODE.SERVER_ERROR).send(error);
    };
};

export {createProgrammer}