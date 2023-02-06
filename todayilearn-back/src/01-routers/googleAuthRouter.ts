import { Router } from "express";
import { postLogin } from "../03-controllers/authController";

const authRouter = Router();

authRouter.post("/auth/oauth", postLogin);

export default authRouter;
