import { Request, Response } from "express";
import httpStatus from "http-status";
import authService from "../04-services/authService";

async function postLogin(req: Request, res: Response) {
  const { email, name } = req.body;
  try {
    const result = await authService.signInWithGoogle(email, name);

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.sendStatus(httpStatus.UNAUTHORIZED);
  }
}

export { postLogin };
