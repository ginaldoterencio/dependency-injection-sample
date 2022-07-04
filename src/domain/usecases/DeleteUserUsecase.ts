import { UserRole } from "../entidades/User";
import { IUserRepository } from "../repositories/IUserRepository";

export class DeleteUserUsecase {
  constructor(private userRepository: IUserRepository) {}
  execute(id: number) {
    const loggedUser = this.userRepository.getLogged();

    if (loggedUser.role !== UserRole.ADMIN)
      throw new Error("Usuário logade dever ser um admin");

    this.userRepository.delete(id);
  }
}
