import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { inject, injectable } from 'inversify';
import { Container } from 'inversify';
import { IUserRepository } from '../../domain/interfaces/user.repository';
import { USER_TYPES } from '../../container/types/user.types';
import { JwtService } from '../../infrastructure/services/jwt.service';

export interface UserPayload extends JwtPayload {
    id: string;
    username: string;
    // Add any other properties you expect in the payload
}

export interface AuthenticatedRequest extends Request {
    user?: UserPayload;
}


@injectable()
export class AuthorizedMiddleware {
    private userRepository: IUserRepository;

    constructor(
        @inject(USER_TYPES.IUserRepository) userRepository: IUserRepository
    ) {
        this.userRepository = userRepository;
    }

    public async authorize(req: AuthenticatedRequest, res: Response, next: NextFunction) {
        const bearerToken = req.headers.authorization;

        if (!bearerToken) {
            res.status(401).json({ message: 'No token provided' });
        }

        try {
            if (bearerToken){
                const token = bearerToken.split(' ')[1];

                JwtService.verifyToken(token, (err, decoded) => {
                    if (err)
                        return res.sendStatus(403);
                    req.user = decoded as UserPayload;
                    next();
                });

            }

        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }


}
