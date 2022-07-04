import { IUserRepository } from "../repositories/IUserRepository";

export class GetUsersUsecase {
  constructor(private userRepository: IUserRepository) {}
  execute() {
    return this.userRepository.query();
  }
}
