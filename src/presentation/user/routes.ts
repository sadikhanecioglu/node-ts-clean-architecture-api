import { Router } from "express";
import { AppContainer } from "../../container";
import { UserController } from "./controller";
import { USER_TYPES } from "../../container/types/user.types";

export const userRoutes = () => {
    const container = AppContainer.getInstance().getContainer();
    const router = Router();
    const userController = container.get<UserController>(USER_TYPES.UserController);
    router.get('/users', userController.getAll);
    router.get('/users/:username', userController.getByUsername);
    return router
}