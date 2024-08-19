import express from "express";
import imageDataRouter from "../routes/imageDataRouter.js";

const app = express();
app.use(express.json(), imageDataRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app