import { UserRepositoryPostgree } from "../data/UserRepositoryPostgree";
import { RegisterUserUsecase } from "../domain/usecases/RegisterUserUsecase";

export function createRegisterUserUsecase() {
  const userRepositoryPostgree = new UserRepositoryPostgree();
  const registerUserUsecase = new RegisterUserUsecase(userRepositoryPostgree);

  return registerUserUsecase;
}
