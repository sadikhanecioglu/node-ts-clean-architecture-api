import { IAuthRepository } from '../../src/domain/interfaces/auth.repository';

export class MockAuthRepository implements IAuthRepository {
    login = jest.fn().mockResolvedValue({id:'123',username:'testUser'});
    register = jest.fn().mockResolvedValue({ id: '123', username: 'testUser' ,password: 'testPassword'});
}