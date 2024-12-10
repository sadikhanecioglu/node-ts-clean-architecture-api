import { Container } from "inversify";
import { AUTH_TYPES } from "../../src/container/types/auth.types";
import { MockAuthRepository } from "../mocks/auth.repository.mock";
import { AuthController } from "../../src/presentation/auth/controller";
import { LoginUserUseCase } from "../../src/use-cases/auth/login-user.usecase";
import { RegisterUserUseCase } from "../../src/use-cases/auth/register-user.usecase";
import { IAuthRepository } from "../../src/domain/interfaces/auth.repository";

export function createTestContainer():Container {
    const container = new Container();
    container.bind<IAuthRepository>(AUTH_TYPES.IAuthRepository).to(MockAuthRepository);
    container.bind(AUTH_TYPES.AuthController).to(AuthController);
    container.bind(AUTH_TYPES.LoginUserUseCase).toDynamicValue(context => {
        const authRepository = context.container.get<MockAuthRepository>(AUTH_TYPES.IAuthRepository);
        return new LoginUserUseCase(authRepository);
    
    });

    container.bind(AUTH_TYPES.RegisterUserUseCase).toDynamicValue(context => {
        const authRepository = context.container.get<MockAuthRepository>(AUTH_TYPES.IAuthRepository);
        return new RegisterUserUseCase(authRepository);
    
    });

    return container
}