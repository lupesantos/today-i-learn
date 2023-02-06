import {
  tutorialSchema,
  tutorialUpdateSchema,
} from "../schemas/tutorialsSchema";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

const postTutorialsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, name, description, tags } = req.body;
  const validate = tutorialSchema.validate(
    { userId, name, description, tags },
    { abortEarly: false }
  );
  if (validate.error) {
    const error = validate.error.details.map((detail) => detail.message);
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error);
  }
  next();
};

const updateTutorialsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id, userId, name, description, tags } = req.body;
  const validate = tutorialUpdateSchema.validate(
    { id, userId, name, description, tags },
    { abortEarly: false }
  );
  if (validate.error) {
    const error = validate.error.details.map((detail) => detail.message);
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error);
  }
  next();
};

const tutorialsMiddlewares = {
  postTutorialsMiddleware,
  updateTutorialsMiddleware,
};

export default tutorialsMiddlewares;
