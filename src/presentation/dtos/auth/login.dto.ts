export class LoginUserDto {
    public readonly username: string;
    public readonly password: string;
  
    private constructor(username: string, password: string) {
      this.username = username;
      this.password = password;
    }
  
    static create(object: { [key: string]: any }): { errors: { field: string; message: string }[]; dto?: LoginUserDto } {
      const { username, password } = object;
  
      const errors: { field: string; message: string }[] = [];
  
      if (!username) errors.push({ field: 'username', message: 'Username is required' });
      if (!password) errors.push({ field: 'password', message: 'Password is required' });
  
      if (errors.length > 0) {
        return { errors };
      }
  
      return { errors: [], dto: new LoginUserDto(username, password) };
    }
  }
  