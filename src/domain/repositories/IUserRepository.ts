import { User } from "../entidades/User";

export interface IUserRepository {
  getLogged(): User;
  save(name: string, age: number): void;
  query(): User[];
  delete(id: number): void;
}
