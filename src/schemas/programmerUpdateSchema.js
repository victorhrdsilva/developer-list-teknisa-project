import joi from "joi";

const programmerUpdateSchema = joi.object({
    name: joi.string().empty(' '),
    python: joi.boolean(),
    javascript: joi.boolean(),
    java: joi.boolean(),
}).min(1);

export { programmerUpdateSchema };