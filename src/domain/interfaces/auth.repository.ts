import { LoginUserDto } from "../../presentation/dtos/auth/login.dto";
import { RegisterDto } from "../../presentation/dtos/auth/register.dto";
import { UserEntity } from "../entities/user.entity";

export interface IAuthRepository {
    register(registerDto: RegisterDto): Promise<UserEntity>;
    login(loginUserDto: LoginUserDto): Promise<UserEntity>;
}