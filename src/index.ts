import { UserController } from "./presentation/UserController";

const userController = new UserController();

userController.save("João", 20);
userController.index();
