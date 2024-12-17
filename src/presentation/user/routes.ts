import { Router } from "express";
import { AppContainer } from "../../container";
import { UserController } from "./controller";
import { USER_TYPES } from "../../container/types/user.types";
import { AuthorizedMiddleware } from "../middlewares/authentication.middlewares";

export const userRoutes = () => {
    const container = AppContainer.getInstance().getContainer();
    const router = Router();
    const authorizedMiddleware = container.get<AuthorizedMiddleware>(AuthorizedMiddleware);
    const userController = container.get<UserController>(USER_TYPES.UserController);
    router.get('/users',authorizedMiddleware.authorize, userController.getAll);
    router.get('/users/:username',authorizedMiddleware.authorize, userController.getByUsername);
    return router
}