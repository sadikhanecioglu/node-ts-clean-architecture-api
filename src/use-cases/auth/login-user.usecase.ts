import { CommonError } from "../../domain/errors/common.error";
import { IAuthRepository } from "../../domain/interfaces/auth.repository";
import { IUserRepository } from "../../domain/interfaces/user.repository";
import { JwtService } from "../../infrastructure/services/jwt.service";
import { LoginUserDto } from "../../presentation/dtos/auth/login.dto";


interface LoginTokenResult {
    token: string;
    user: {
        id: string | undefined;
        username: string;
    }
}

export class LoginUserUseCase {
    private authRepository: IAuthRepository;
    constructor(userRepository: IAuthRepository) {
        this.authRepository = userRepository;
      }

      public async execute(loginUserDto: LoginUserDto): Promise<LoginTokenResult> {
        
   
        const user = await this.authRepository.login(loginUserDto);
        const payload = { id: user.id, username: user.username };
        const token = JwtService.generateToken(payload);
        
        return {
          token,
          user: {
            id: user.id,
            username: user.username,
          },          
        };
      }

}