export enum UserRole {
  USER = "User",
  ADMIN = "Admin",
}
export class User {
  constructor(
    public name: string,
    public age: number,
    public role: UserRole = UserRole.USER
  ) {}
}
