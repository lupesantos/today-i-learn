import { Router } from "express";
import tutorialsMiddlewares from "../02-middlewares/postTutorialMiddleware";
import {
  postTutorial,
  getTutorial,
  editTutorial,
  deleteTutorial,
} from "../03-controllers/tutorial-controller";
const tutorialRouter = Router();

tutorialRouter
  .post(
    "/tutorials",
    tutorialsMiddlewares.postTutorialsMiddleware,
    postTutorial
  )
  .get("/tutorials", getTutorial)
  .post(
    "/tutorials/update",
    tutorialsMiddlewares.updateTutorialsMiddleware,
    editTutorial
  )
  .delete("/tutorials/delete", deleteTutorial);

export default tutorialRouter;
