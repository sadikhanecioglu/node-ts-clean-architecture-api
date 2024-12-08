import { CommonError } from "../../domain/errors/common.error";
import { Response } from 'express';
export  class BaseController {

    ErroStatus(error: unknown, response: Response) {
    
        if (error instanceof CommonError) {
            return response.status(error.statusCode).json(error.toJSON());
        }

        const environment = process.env.ENVIRONMENT || 'production';

        if (environment === 'development') {
            return response.status(500).json({
                message: 'Internal Server Error',
                error: error instanceof Error ? error.message : String(error),
                stack: error instanceof Error ? error.stack : null,
            });
        }

        return response.status(500).json({ message: 'Internal Server Error' });
    }
}