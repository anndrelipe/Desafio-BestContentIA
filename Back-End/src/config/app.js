import express from "express";

import imageDataRouter from "../routes/imageDataRouter.js";
import chatGptRouter from "../routes/chatGptRouter.js";
import imageUploadRouter from "../routes/imageStorageRouter.js";
import userRouter from "../routes/userRouter.js";

import cors from "cors";

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json(), imageDataRouter, chatGptRouter, imageUploadRouter, userRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app