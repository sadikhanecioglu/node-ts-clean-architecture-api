import { UserEntity } from "../entities/user.entity";



export interface IUserRepository {
    findAll(): Promise<UserEntity[]>;
    create(user: UserEntity): Promise<UserEntity>;
    update(user: UserEntity): Promise<void>;
    findUserByUserName(username: string): Promise<UserEntity | null>;
    findUserById(id: string): Promise<UserEntity | null>;
}