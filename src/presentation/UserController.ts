import { UserRepositoryMySQL } from "../data/UserRepositoryMySQL";
import { UserRepositoryPostgree } from "../data/UserRepositoryPostgree";
import { RegisterUserUsecase } from "../domain/usecases/RegisterUserUsecase";
import { createGetUsersUsecase } from "../factory/createGetUsersUsecase";
import { createRegisterUserUsecase } from "../factory/createRegisterUserUsecase";

// const userRepositoryPostgree = new UserRepositoryPostgree();

const registerUserUsecase = createRegisterUserUsecase();
const getUsersUsecase = createGetUsersUsecase();

export class UserController {
  save(name: string, age: number) {
    registerUserUsecase.execute(name, age);
    console.log("salvou usuário");
  }
  index() {
    const users = getUsersUsecase.execute();
    console.log(users);
  }
}
