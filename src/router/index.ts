import {Request, Response, Router} from "express";
import {UserControllerInterface} from "../contract/UserControllerInterface";
import {userRouter} from "./userRouter";

const routers = async (userController: UserControllerInterface): Promise<Router> => {
    const route = Router();

    route.get("/", (req: Request, res: Response) => res.status(200).send({
        code: "HOME PAGE",
        message: "Please check the others endpoints",
        response: null,
        error: null
    }));

    route.use("/api", await userRouter(userController));

    route.use("*", (req, res) => {
        res.status(404).send({
            code: "PAGE_NOT_FOUND",
            message: "please hit the correct endpoints",
            response: null,
            error: null
        });
    });
    return route;
};

export default routers;