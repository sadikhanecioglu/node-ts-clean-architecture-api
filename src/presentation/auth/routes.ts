
import { Router } from 'express';
import { AuthController } from './controller';
import { AUTH_TYPES } from '../../container/types/auth.types';
import { AppContainer } from '../../container';


export const authRoutes = () => {
    const container = AppContainer.getInstance().getContainer();
    const router = Router();
    const authController = container.get<AuthController>(AUTH_TYPES.AuthController);
    router.post('/login', authController.login);
    router.post('/register', authController.register);
    return router
}


