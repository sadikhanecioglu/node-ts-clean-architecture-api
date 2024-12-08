import { IUserRepository } from '../../domain/interfaces/user.repository';
import { UserEntity } from '../../domain/entities/user.entity';

export class GetUserByUsername {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  // Kullanıcı adını alarak kullanıcıyı döndürür
  public async execute(username: string): Promise<UserEntity | null> {
    return await this.userRepository.findUserByUserName(username);
  }
}
