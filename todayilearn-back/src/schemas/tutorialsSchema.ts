import Joi from "joi";

const tutorialSchema = Joi.object({
  userId: Joi.number().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  tags: Joi.string().required(),
});

const tutorialUpdateSchema = Joi.object({
  id: Joi.number().required(),
  userId: Joi.number().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  tags: Joi.string().required(),
});

export { tutorialSchema, tutorialUpdateSchema };
