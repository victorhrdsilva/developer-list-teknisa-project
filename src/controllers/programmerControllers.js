import programmer from "../database/tables/programmer.js";
import { STATUS_CODE } from "../enums/statusCode.js";

const createProgrammer = async (req, res) => {
  const { name, python, javascript, java } = req.body;

  try {
    const newProgrammer = await programmer.create({
      name: name,
      python: python,
      javascript: javascript,
      java: java,
    });

    res.status(STATUS_CODE.OK).send(newProgrammer);
  } catch (error) {
    res.status(STATUS_CODE.SERVER_ERROR).send(error);
  }
};

const getProgrammers = async (req, res) => {
  try {
    const records = await programmer.findAll();
    res.status(STATUS_CODE.OK).send(records);
  } catch (error) {
    res.status(STATUS_CODE.SERVER_ERROR).send(error);
  }
};

const getProgrammerById = async (req, res) => {
  try {
    const id = req.params.id;

    const record = await programmer.findByPk(id);

    if (record) {
      res.status(STATUS_CODE.OK).send(record);
    } else {
      res.status(STATUS_CODE.OK).send("No programmer found using received ID");
    }
  } catch (error) {
    res.status(STATUS_CODE.SERVER_ERROR).send(error);
  }
};

export { createProgrammer, getProgrammers, getProgrammerById};
