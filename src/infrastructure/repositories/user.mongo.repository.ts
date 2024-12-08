import { UserEntity } from "../../domain/entities/user.entity";
import { IUserRepository } from "../../domain/interfaces/user.repository";
import { UserModel } from "../models/user.model";


export class UserMongoRepository implements IUserRepository {

    async findAll(): Promise<UserEntity[]> {
        return await UserModel.find();
    }
    async create(user: UserEntity): Promise<UserEntity> {
        const userEntity = new UserModel(user);
        return await userEntity.save();
    }
    async update(user: UserEntity): Promise<void> {
        await UserModel.updateOne({ id: user.id }, user);
    }
    async findUserByUserName(username: string): Promise<UserEntity | null> {
        return await UserModel.findOne({ username });
    }
    async findUserById(id: string): Promise<UserEntity | null> {
        return await UserModel.findById(id);
    }
}