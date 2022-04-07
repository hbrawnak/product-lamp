import {Router} from "express";
import validateResource from "../middleware/validateResource";
import {SessionControllerInterface} from "../contract/SessionControllerInterface";
import {createSessionSchema} from "../schema/createSessionSchema";


export const sessionRouter = async (sessionController: SessionControllerInterface): Promise<Router> => {
    const router = Router();
    router.post("/session", validateResource(createSessionSchema), sessionController.create);
    return router;
};