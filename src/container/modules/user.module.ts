import { UserMongoRepository } from '../../infrastructure/repositories/user.mongo.repository';
import { IUserRepository } from "../../domain/interfaces/user.repository";
import { ContainerModule, interfaces } from 'inversify';
import { GetUserByUsername } from '../../use-cases/user/get-user-byusername.usercase';
import { USER_TYPES } from '../types/user.types';
import { UserController } from '../../presentation/user/controller';
import { GetAllUserUseCase } from '../../use-cases/user/getall-user.usecase';


const userModuleContainer = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
 
    bind<IUserRepository>(USER_TYPES.IUserRepository).to(UserMongoRepository);
 
    bind<GetUserByUsername>(USER_TYPES.GetUserByUsername).toDynamicValue(context => {
        const userRepository = context.container.get<IUserRepository>(USER_TYPES.IUserRepository);
        return new GetUserByUsername(userRepository);
      });
      
      bind<GetAllUserUseCase>(USER_TYPES.GetAllUserUseCase).toDynamicValue(context => {
        const userRepository = context.container.get<IUserRepository>(USER_TYPES.IUserRepository);
        return new GetAllUserUseCase(userRepository);
      });
 
      bind<UserController>(USER_TYPES.UserController).to(UserController);
 });


export { userModuleContainer };