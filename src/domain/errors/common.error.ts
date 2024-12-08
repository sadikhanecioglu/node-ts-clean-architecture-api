export class CommonError extends Error {

    constructor(
        public readonly statusCode: number,
        message: string
    ) {
        super(message);
        Object.setPrototypeOf(this, CommonError.prototype);
    }
    toJSON() {
        return {
            error: {
                message: this.message,
                statusCode: this.statusCode
            }
        };
    }
    static badRequest(message: string) {
        return new CommonError(400, message);
    }

    static unauthorized(message: string) {
        return new CommonError(401, message);
    }

    static forbidden(message: string) {
        return new CommonError(403, message);
    }

    static notFound(message: string) {
        return new CommonError(404, message);
    }

    static InternalServerError(message: string = 'Internal Server Error') {
        // Log de errores y envio de notificacion al responsable
        return new CommonError(500, message);
    }

    static conflict(message: string) {
        return new CommonError(409, message);
    }
}