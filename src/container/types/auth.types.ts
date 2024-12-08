const AUTH_TYPES = {
        IAuthRepository: Symbol.for('IAuthRepository'),
        LoginUserUseCase: Symbol.for('LoginUserUseCase'),
        RegisterUserUseCase: Symbol.for('RegisterUserUseCase'),
        AuthController: Symbol.for('AuthController')
    }
    
    export { AUTH_TYPES };