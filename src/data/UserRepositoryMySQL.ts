import { User, UserRole } from "../domain/entidades/User";
import { IUserRepository } from "../domain/repositories/IUserRepository";

export class UserRepositoryMySQL implements IUserRepository {
  getLogged(): User {
    return { name: "Homero", age: 30, role: UserRole.ADMIN };
  }
  delete(id: number): void {
    console.log(`remover usuário ${id} no mysql`);
  }
  save(name: string, age: number) {
    console.log(`salvar usuário: {nome:  ${name}, idade: ${age}} no mysql!`);
  }
  query() {
    return [
      { name: "Rafael", age: 20, role: UserRole.USER },
      { name: "Leandro", age: 21, role: UserRole.USER },
    ];
  }
}
