import express from "express";
import imageDataRouter from "../routes/imageDataRouter.js";
import chatGptRouter from "../routes/chatGptRouter.js";

const app = express();
app.use(express.json(), imageDataRouter, chatGptRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app