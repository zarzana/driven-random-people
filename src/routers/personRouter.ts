import { Router } from "express";
import personController from "../controllers/personController";

const personRouter = Router();

personRouter.get("/person" , personController.getRandomPerson);

export default personRouter;