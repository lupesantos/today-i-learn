import { Request, Response } from "express";
import errorService from "../04-services/errorsService";
import httpStatus from "http-status";

async function postError(req: Request, res: Response) {
  const { userId, name, description, tags } = req.body;

  try {
    const tutorial = await errorService.createError(
      userId,
      name,
      description,
      tags
    );

    return res.status(httpStatus.OK).send(tutorial);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

async function editError(req: Request, res: Response) {
  const { id, userId, name, description, tags } = req.body;

  try {
    const editedError = await errorService.editError(
      id,
      userId,
      name,
      description,
      tags
    );

    return res.status(httpStatus.OK).send(editedError);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

async function getError(req: Request, res: Response) {
  const { term } = req.query as Record<string, string>;

  try {
    const errors = await errorService.readErrors(term);

    return res.send(errors);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

async function deleteError(req: Request, res: Response) {
  const { id, userId } = req.body;

  try {
    await errorService.deleteError(id, userId);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export { postError, getError, editError, deleteError };
