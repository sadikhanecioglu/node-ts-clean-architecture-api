import { AUTH_TYPES } from "../../src/container/types/auth.types";
import { IAuthRepository } from "../../src/domain/interfaces/auth.repository";
import { AuthController } from "../../src/presentation/auth/controller";
import { LoginUserUseCase } from "../../src/use-cases/auth/login-user.usecase";
import { RegisterUserUseCase } from "../../src/use-cases/auth/register-user.usecase";
import { createTestContainer } from "../setup/container";


describe('Auth Use Cases', () => {

    let loginUserCases: LoginUserUseCase
    let registerUserCases: RegisterUserUseCase

    beforeAll(() => {
        const container = createTestContainer();
        loginUserCases = container.get<LoginUserUseCase>(AUTH_TYPES.LoginUserUseCase);
        registerUserCases = container.get<RegisterUserUseCase>(AUTH_TYPES.RegisterUserUseCase);
    });

    it('should return token', async () => {
        const result = await loginUserCases.execute({ username: 'testUser' , password: 'testPassword'} as any);
        expect(result.user).toEqual({ id: '123', username: 'testUser' });
        expect(result.token).not.toBeNull();
    });

});