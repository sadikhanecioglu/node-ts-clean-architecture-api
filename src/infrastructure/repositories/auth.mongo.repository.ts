import { UserEntity } from "../../domain/entities/user.entity";
import { CommonError } from "../../domain/errors/common.error";
import { IAuthRepository } from "../../domain/interfaces/auth.repository";
import { LoginUserDto } from "../../presentation/dtos/auth/login.dto";
import { RegisterDto } from "../../presentation/dtos/auth/register.dto";
import { UserModel } from "../models/user.model";


export class AuthMongoRepository implements IAuthRepository {
    async register(registerDto: RegisterDto): Promise<UserEntity> {
        const userNameExist = await UserModel.findOne({ username: registerDto.username });

        if (userNameExist) {
            throw CommonError.conflict('User name already exist');
        }

        const userEntity = new UserModel({
            id: undefined,
            username: registerDto.username,
            password: registerDto.password,
            email: registerDto.email,

        });
        const userModel =  await userEntity.save();
        return userModel;
    }
    async login(loginUserDto: LoginUserDto): Promise<UserEntity> {


        const user = await UserModel.findOne({ username: loginUserDto.username });

        if (!user) {
            throw CommonError.badRequest('User not found');
        }

        if (user.password !== loginUserDto.password) {
            throw CommonError.badRequest('Invalid password');
        }

        return user;

    }
}