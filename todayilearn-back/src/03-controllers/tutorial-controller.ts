import { Request, Response } from "express";
import tutorialService from "../04-services/tutorialsService";
import httpStatus from "http-status";

async function postTutorial(req: Request, res: Response) {
  const { userId, name, description, tags } = req.body;

  try {
    const tutorial = await tutorialService.createTutorial(
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

async function editTutorial(req: Request, res: Response) {
  const { id, userId, name, description, tags } = req.body;
  //const token = req.headers.authorization?.replace('Bearer ', '');

  try {
    const editedTutorial = await tutorialService.editTutorial(
      id,
      userId,
      name,
      description,
      tags
    );

    return res.status(httpStatus.OK).send(editedTutorial);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }

    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

async function getTutorial(req: Request, res: Response) {
  const { term } = req.query as Record<string, string>;

  try {
    const tutorials = await tutorialService.readTutorials(term);

    return res.send(tutorials);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

async function deleteTutorial(req: Request, res: Response) {
  const { id, userId } = req.body;

  try {
    await tutorialService.deleteTutorial(id, userId);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export { postTutorial, getTutorial, editTutorial, deleteTutorial };
