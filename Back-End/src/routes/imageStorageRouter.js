import ImageUploadController from "../controllers/ImageUploadController.js";
import upload from "../middlewares/multer.js";
import Router from "express";

const imageUploadRouter = Router();

imageUploadRouter.post("/api/images-upload", upload.array("files") ,ImageUploadController.sendImageToStorage);
imageUploadRouter.get("/api/images-dowload/:name", ImageUploadController.receiveAnImage);

export default imageUploadRouter