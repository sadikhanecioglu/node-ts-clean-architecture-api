
export class RegisterDto {
    public readonly username: string;
    public readonly password: string;
    public readonly email: string;

    private constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    static create(object: { [key: string]: any }): { errors: { field: string; message: string }[]; dto?: RegisterDto } {
        const { username, password, email } = object;
        const errors: { field: string; message: string }[] = [];
        if (!username) errors.push({ field: 'username', message: 'Username is required' });
        if (!password) errors.push({ field: 'password', message: 'Password is required' });
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basit bir e-posta regex doğrulaması
            if (!emailRegex.test(email)) {
                errors.push({ field: 'email', message: 'Invalid email address' });
            }
        }
        if (errors.length > 0) {
            return { errors };
        }
        return { errors: [], dto: new RegisterDto(username, password, email) };
    }
}