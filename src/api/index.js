import {Router} from "express";
import pictureRouter from "./picture";

const apiRouter = new Router();

apiRouter.use("/picture", pictureRouter);

export default apiRouter;