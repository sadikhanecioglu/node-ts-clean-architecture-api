import { ContainerModule, interfaces } from "inversify";
import { LoginUserUseCase } from "../../use-cases/auth/login-user.usecase";
import { AUTH_TYPES } from "../types/auth.types";
import { RegisterUserUseCase } from "../../use-cases/auth/register-user.usecase";
import { IAuthRepository } from "../../domain/interfaces/auth.repository";
import { AuthMongoRepository } from "../../infrastructure/repositories/auth.mongo.repository";
import { AuthController } from "../../presentation/auth/controller";


const authModuleContainer = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    
    bind<IAuthRepository>(AUTH_TYPES.IAuthRepository).to(AuthMongoRepository);

    bind<LoginUserUseCase>(AUTH_TYPES.LoginUserUseCase).toDynamicValue(context => {
        const authRepository = context.container.get<IAuthRepository>(AUTH_TYPES.IAuthRepository);
        return new LoginUserUseCase(authRepository);
      });

    bind<RegisterUserUseCase>(AUTH_TYPES.RegisterUserUseCase).toDynamicValue(context => {
        const authRepository = context.container.get<IAuthRepository>(AUTH_TYPES.IAuthRepository);
        return new RegisterUserUseCase(authRepository);
      });

      bind<AuthController>(AUTH_TYPES.AuthController).to(AuthController);
})

export { authModuleContainer };