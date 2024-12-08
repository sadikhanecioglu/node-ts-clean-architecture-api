import { IUserRepository } from "../../domain/interfaces/user.repository";


export class CreateUserUseCase {
   
    private userRepository: IUserRepository;
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    
}