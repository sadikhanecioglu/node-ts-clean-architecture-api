import { Response } from "express";
import { AUTH_TYPES } from "../../src/container/types/auth.types";
import { AuthController } from "../../src/presentation/auth/controller";
import { createTestContainer } from "../setup/container";
import { createRequest, createResponse, MockRequest, MockResponse } from 'node-mocks-http';


describe('AuthController', () => {

    let authController: AuthController;
    let request: MockRequest<Request>;
    let response: MockResponse<Response>;

    beforeAll(() => {
        const container = createTestContainer();
        authController = container.get<AuthController>(AUTH_TYPES.AuthController);
        response = createResponse();
    });

    it('should return token', async () => {
        const request = createRequest({
            method: 'POST',
            url: '/auth/login',
            body: { username: 'testUser', password: 'testPassword' }
        });


        await authController.login(request, response as Response);
        const result = await response._getJSONData();

        expect(result.user).toStrictEqual( { id: '123', username: 'testUser' });
        expect(result.token).not.toBeNull();
    });

    it('should return token', async () => {
        const request = createRequest({
            method: 'POST',
            url: '/auth/register',
            body: { username: 'testUser', password: 'testPassword' }
        });


        await authController.register(request, response as Response);
        const result = await response._getJSONData();
        expect(result.user).toStrictEqual( { id: '123', username: 'testUser' });
        expect(result.token).not.toBeNull();
    });
});