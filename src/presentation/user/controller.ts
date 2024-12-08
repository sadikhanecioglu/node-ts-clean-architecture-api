import { inject, injectable } from "inversify";
import { BaseController } from "../abstraction/base.controller";
import { GetAllUserUseCase } from "../../use-cases/user/getall-user.usecase";
import { GetUserByUsername } from "../../use-cases/user/get-user-byusername.usercase";
import { Request, Response } from 'express';
import { USER_TYPES } from "../../container/types/user.types";

@injectable()
export class UserController extends BaseController { 

    private getAllUser: GetAllUserUseCase
    private getUserByUsername: GetUserByUsername
    constructor(@inject(USER_TYPES.GetAllUserUseCase) getAllUser: GetAllUserUseCase,@inject(USER_TYPES.GetUserByUsername) getUserByUsername: GetUserByUsername) {
        super();
        this.getAllUser = getAllUser;
        this.getUserByUsername = getUserByUsername;
    }

    async getAll(req: Request, res: Response) {
        try {
            const users = await this.getAllUser.execute();
            res.status(200).json(users);
        } catch (error) {
            this.ErroStatus(error, res);
        }
    }

    async getByUsername(req: Request, res: Response) {
        try {
            const user = await this.getUserByUsername.execute(req.params.username);
            res.status(200).json(user);
        } catch (error) {
            this.ErroStatus(error, res);
        }
    }

}