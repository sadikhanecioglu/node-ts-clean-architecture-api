import { CommonError } from "../../domain/errors/common.error";
import { IAuthRepository } from "../../domain/interfaces/auth.repository";
import { IUserRepository } from "../../domain/interfaces/user.repository";
import { JwtService } from "../../infrastructure/services/jwt.service";
import { RegisterDto } from "../../presentation/dtos/auth/register.dto";


interface RegisterTokenResult {
    token: string;
    user: {
        id: string | undefined;
        username: string;
    }
}

export class RegisterUserUseCase {

    private authRepository: IAuthRepository;
    constructor(userRepository: IAuthRepository) {
        this.authRepository = userRepository;
      }

    public async execute(registerDto: RegisterDto): Promise<RegisterTokenResult> {
        
        const createdUser = await this.authRepository.register(registerDto);
        const payload = { id: createdUser.id, username: createdUser.username };
        const token = JwtService.generateToken(payload);

        return {
            token,
            user: {
                id: createdUser.id,
                username: createdUser.username,
            },
        };

    }
}