import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { inject, injectable } from 'inversify';
import { Container } from 'inversify';
import { IUserRepository } from '../../domain/interfaces/user.repository';
import { INJECT_TYPES as TYPES } from '../../container/types';

interface UserPayload extends JwtPayload {
    id: string;
    email: string;
    // Add any other properties you expect in the payload
}

interface AuthenticatedRequest extends Request {
    user?: UserPayload;
}


@injectable()
export class AuthorizedMiddleware {
    private userRepository: IUserRepository;

    constructor(
        @inject(TYPES.IUserRepository) userRepository: IUserRepository
    ) {
        this.userRepository = userRepository;
    }

    public async authorize(req: AuthenticatedRequest, res: Response, next: NextFunction) {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        try {
            jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
                if (err) return res.sendStatus(403);
                req.user = decoded as UserPayload;
                next();
            });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }


}
