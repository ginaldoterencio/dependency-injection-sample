import { mock } from "jest-mock-extended";
import { UserRole } from "../entidades/User";
import { IUserRepository } from "../repositories/IUserRepository";
import { DeleteUserUsecase } from "./DeleteUserUsecase";

describe("DeleteUserUsecase", () => {
  it("should getLoggedUser method from UserRepository been called once", () => {
    const userRepositoryMock = mock<IUserRepository>();
    const deleteUserUsecase = new DeleteUserUsecase(userRepositoryMock);

    userRepositoryMock.getLogged.mockReturnValue({
      name: "João",
      age: 20,
      role: UserRole.ADMIN,
    });

    deleteUserUsecase.execute(1);

    expect(userRepositoryMock.getLogged).toBeCalledTimes(1);
  });

  it("should delete method from UserRepository been called with correct params", () => {
    const userRepositoryMock = mock<IUserRepository>();
    const deleteUserUsecase = new DeleteUserUsecase(userRepositoryMock);
    const userId = 1;

    userRepositoryMock.getLogged.mockReturnValue({
      name: "João",
      age: 20,
      role: UserRole.ADMIN,
    });

    deleteUserUsecase.execute(userId);

    expect(userRepositoryMock.delete).toBeCalledWith(userId);
  });

  it("should delete user successfully", () => {
    const userRepositoryMock = mock<IUserRepository>();

    userRepositoryMock.getLogged.mockReturnValue({
      name: "João",
      age: 20,
      role: UserRole.ADMIN,
    });

    const deleteUserUsecase = new DeleteUserUsecase(userRepositoryMock);

    expect(() => deleteUserUsecase.execute(1)).not.toThrowError();
  });

  it("should throw error when logged user is not admin", () => {
    const userRepositoryMock = mock<IUserRepository>();

    userRepositoryMock.getLogged.mockReturnValue({
      name: "João",
      age: 20,
      role: UserRole.USER,
    });

    const deleteUserUsecase = new DeleteUserUsecase(userRepositoryMock);

    expect(() => deleteUserUsecase.execute(1)).toThrowError();
  });
});
