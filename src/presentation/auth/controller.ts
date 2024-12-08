import { inject, injectable } from "inversify";
import { GetUserByUsername } from "../../use-cases/user/get-user-byusername.usercase";
import { LoginUserDto } from "../dtos/auth/login.dto";
import { Request, Response } from 'express';
import { LoginUserUseCase } from "../../use-cases/auth/login-user.usecase";
import { BaseController } from "../abstraction/base.controller";
import { RegisterDto } from "../dtos/auth/register.dto";
import { RegisterUserUseCase } from "../../use-cases/auth/register-user.usecase";
import { AUTH_TYPES } from "../../container/types/auth.types";

@injectable()
export class AuthController extends BaseController {

    private loginByUsername: LoginUserUseCase;
    private registerUser: RegisterUserUseCase;
    constructor(
        @inject(AUTH_TYPES.LoginUserUseCase) loginByUsername: LoginUserUseCase,
        @inject(AUTH_TYPES.RegisterUserUseCase) registerUser: RegisterUserUseCase,
    ) {
        super();
        this.loginByUsername = loginByUsername;
        this.registerUser = registerUser;

    }

    register = (req: Request, res: Response) => {
        if (!req.body)
            res.status(400).json({ message: 'No data provided' });

        const result = RegisterDto.create(req.body);

        if (result.errors.length > 0) res.status(400).json(result.errors);

        if (!result.dto) res.status(500).json({ message: 'Internal server error' });
        else {
            this.registerUser.execute(result.dto).then((token) => {
                res.status(200).json(token);
            }).catch((error) => {
                this.ErroStatus(error, res);
            });
        }

    }


    login = (req: Request, res: Response) => {
        if (!req.body)
            res.status(400).json({ message: 'No data provided' });

        const result = LoginUserDto.create(req.body);

        if (result.errors.length > 0) res.status(400).json(result.errors);

        if (!result.dto) res.status(500).json({ message: 'Internal server error' });
        else {
            const dto = result.dto;
            this.loginByUsername.execute(dto).then((token) => {
                res.status(200).json(token);
            }).catch((error) => {
                this.ErroStatus(error, res);
            });
        }
    }


}