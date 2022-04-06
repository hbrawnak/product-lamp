import {Request, Response} from "express";
import {Controller} from "./Controller";
import {UserControllerInterface} from "../contract/UserControllerInterface";
import {UserServiceInterface} from "../contract/UserServiceInterface";
import {UserSerializer} from "../serializer/UserSerializer";
import logger from "../infra/logger";


export class UserController extends Controller implements UserControllerInterface {
    constructor(private userService: UserServiceInterface) {
        super();
        this.userService = userService;
        this.create = this.create.bind(this);
    }

    public async create(req: Request, res: Response): Promise<any> {
        try {
            const {message, user} = await this.userService.create(req.body);
            if (user !== null) {
                const serializedUser = await UserSerializer.serializer(user);
                return await this.sendResponse(201, false, message, serializedUser, res);
            } else {
                return await this.sendResponse(409, true, message, user, res);
            }

        } catch (e) {
            logger.error(e);
            return await this.sendResponse(409, true, e.message, null, res);
        }
    }

    public async sendResponse(statusCode: number, error: boolean, message: string, data: any, res: Response, optional?: object): Promise<any> {
        return res.status(statusCode).send({error, message, data, ...optional});
    }

}


export const newUserController = async (userService: UserServiceInterface) => {
    return new UserController(userService);
}

