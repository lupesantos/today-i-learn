import express from "express";
import cors from "cors";
import tutorialRouter from "./01-routers/tutorialsRouter";
import errorRouter from "./01-routers/errorRouter";
import authRouter from "./01-routers/googleAuthRouter";

const server = express();

server.use(cors());
server.use(express.json());
server.use(tutorialRouter);
server.use(errorRouter);
server.use(authRouter);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
