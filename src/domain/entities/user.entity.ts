import { v4 as uuidv4 } from 'uuid';

export class UserEntity{

    constructor(
        public readonly id: string | undefined = uuidv4(), // Varsayılan olarak UUID oluşturulur
        public username: string,
        public email: string,
        public password: string,

    ) { 

    }
} 