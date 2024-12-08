import { UserEntity } from "../../domain/entities/user.entity";
import { IUserRepository } from "../../domain/interfaces/user.repository";


export class GetAllUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async execute(): Promise<UserEntity[]> {
        return await this.userRepository.findAll();
    }


}