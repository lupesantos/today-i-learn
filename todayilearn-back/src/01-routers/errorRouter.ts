import { Router } from "express";
import {
  postError,
  getError,
  editError,
  deleteError,
} from "../03-controllers/error-controller";

const errorRouter = Router();

errorRouter.post("/errors", postError);
errorRouter.get("/errors", getError);
errorRouter.post("/errors/update", editError);
errorRouter.delete("/errors/delete", deleteError);

export default errorRouter;
