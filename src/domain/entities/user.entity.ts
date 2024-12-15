
export class UserEntity{

    constructor(
        public readonly id: string | undefined , // Varsayılan olarak UUID oluşturulur
        public username: string,
        public email: string,
        public password: string,

    ) { 

    }
} 