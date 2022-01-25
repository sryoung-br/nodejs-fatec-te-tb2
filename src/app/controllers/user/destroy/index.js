import { UserModel } from './../../../models/user.model.js'
import { UserService } from '../../../services/user.service.js'
import { DestroyUserController } from './destroy.controller.js';

const userService = new UserService(UserModel);
const destroyUserController = new DestroyUserController(userService)

export { destroyUserController }