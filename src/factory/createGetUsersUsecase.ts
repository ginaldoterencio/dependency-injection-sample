import { UserRepositoryMySQL } from "../data/UserRepositoryMySQL";
import { GetUsersUsecase } from "../domain/usecases/GetUserUsecase";

export function createGetUsersUsecase() {
  const userRepository = new UserRepositoryMySQL();
  const getUsersUsecase = new GetUsersUsecase(userRepository);

  return getUsersUsecase;
}
