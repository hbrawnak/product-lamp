import {Router} from "express";
import {UserControllerInterface} from "../contract/UserControllerInterface";
import validateResource from "../middleware/validateResource";
import {createUserSchema} from "../schema/createUserSchema";


export const userRouter = async (userController: UserControllerInterface): Promise<Router> => {
    const router = Router();
    router.post("/users", validateResource(createUserSchema), userController.create);
    return router;
};