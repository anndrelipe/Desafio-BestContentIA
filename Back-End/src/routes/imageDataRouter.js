import { Router } from "express";
import ImageDataController from "../controllers/ImageDataController.js";

const imageDataRouter = Router();

imageDataRouter.post('/api/images-data', ImageDataController.sendImageData);
imageDataRouter.get('/api/images-data', ImageDataController.receiveAllImagesData);
imageDataRouter.put('/api/images-data/:id', ImageDataController.editAnImageData);
imageDataRouter.delete('/api/images-data/:id', ImageDataController.deleteAnImageData);

export default imageDataRouter