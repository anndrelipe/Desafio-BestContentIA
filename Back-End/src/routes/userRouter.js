import Router from "express";
import UserController from "../controllers/UserController.js";

const userRouter = Router();

userRouter.post('/api/users/register', UserController.createUserWithEmailAndPassword);
userRouter.post('/api/users/login', UserController.signInWithEmailAndPassword);

export default userRouter
