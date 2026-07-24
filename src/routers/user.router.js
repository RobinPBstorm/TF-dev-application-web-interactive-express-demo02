import { Router } from "express";

import userController from "../controllers/user.controller.js";

const usersRouter = Router();

usersRouter.get('/', userController.getAll);
usersRouter.post('/', userController.createUser);
usersRouter.get('/:id', userController.getUserById);

export default usersRouter;