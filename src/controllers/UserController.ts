import {Request, Response} from "express";
import {Controller} from "./Controller";
import {UserControllerInterface} from "../contract/UserControllerInterface";
import logger from "../infra/logger";
import {UserServiceInterface} from "../contract/UserServiceInterface";


export class UserController extends Controller implements UserControllerInterface {
    constructor(private userService: UserServiceInterface) {
        super();
        this.userService = userService;
        this.create = this.create.bind(this);
    }

    public async create(req: Request, res: Response): Promise<any> {
        try {
            const user = await this.userService.create(req.body);
            /*TODO: Use serializer */
            return await this.sendResponse(201, "USER HAS CREATED", user, [], res);
        } catch (e) {
            logger.error(e);
            return await this.sendResponse(409, e.message, null, [], res);
        }
    }

    public async sendResponse(statusCode: number, message: string, data: any, errors: [], res: Response, optional?: object): Promise<any> {
        return res.status(statusCode).send({message, data, errors, ...optional});
    }

}


export const newUserController = async (userService: UserServiceInterface) => {
    return new UserController(userService);
}

