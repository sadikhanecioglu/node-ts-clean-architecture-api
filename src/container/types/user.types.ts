const USER_TYPES = {
    IUserRepository: Symbol.for("IUserRepository"),
    GetUserByUsername: Symbol.for("GetUserByUsername"),
    GetAllUserUseCase: Symbol.for("GetAllUserUseCase"),
    UserController: Symbol.for("UserController"),
}

export { USER_TYPES };