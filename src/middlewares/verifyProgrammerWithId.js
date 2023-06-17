import programmer from "../database/tables/programmer.js";
import { STATUS_CODE } from "../enums/statusCode.js";

async function verifyProgrammerWithId(req, res, next) {
  const id = req.params.id;

  try {
    const record = await programmer.findByPk(id);

    if (!record) {
      res.status(STATUS_CODE.NOT_FOUND).send("Programmer ID not found.");
      return;
    }

    res.locals.record = record;
    next();
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

export { verifyProgrammerWithId };
