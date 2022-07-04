import { IUserRepository } from "../repositories/IUserRepository";

export class RegisterUserUsecase {
  constructor(private userRepository: IUserRepository) {}
  execute(nome: string, idade: number) {
    if (idade < 18) throw new Error("Usuário deve ser maior que 18 anos");

    this.userRepository.save(nome, idade);
  }
}
