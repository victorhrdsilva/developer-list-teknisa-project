import joi from "joi";

const programmerCreateSchema = joi.object({
    name: joi.string().required().empty(' '),
    python: joi.boolean().required(),
    javascript: joi.boolean().required(),
    java: joi.boolean().required(),
});

export { programmerCreateSchema };