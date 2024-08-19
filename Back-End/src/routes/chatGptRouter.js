import { Router } from "express";
import ChatGptController from "../controllers/ChatGptController.js";

const chatGptRouter = Router();

chatGptRouter.post('/api/question', ChatGptController.sendAQuestion);

export default chatGptRouter