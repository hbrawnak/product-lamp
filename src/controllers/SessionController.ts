import {Request, Response} from "express";
import {Controller} from "./Controller";
import logger from "../infra/logger";
import {SessionControllerInterface} from "../contract/SessionControllerInterface";
import {SessionServiceInterface} from "../contract/SessionServiceInterface";
import {UserServiceInterface} from "../contract/UserServiceInterface";


export class SessionController extends Controller implements SessionControllerInterface {
    constructor(private userService: UserServiceInterface, private sessionService: SessionServiceInterface) {
        super();
        this.userService = userService;
        this.sessionService = sessionService;
        this.create = this.create.bind(this);
    }

    public async create(req: Request, res: Response): Promise<any> {
        try {
            /*TODO: validate request by schema*/
            const {valid, user} = await this.userService.validatePassword(req.body);


            if (!valid && !user) {
                return await this.sendResponse(401, true, "Invalid email or password!", null, res);
            }
            /*if (session !== null) {
                return await this.sendResponse(201, false, message, session, res);
            } else {
                return await this.sendResponse(409, true, message, session, res);
            }*/

        } catch (e) {
            logger.error(e);
            return await this.sendResponse(409, true, e.message, null, res);
        }
    }

    public async sendResponse(statusCode: number, error: boolean, message: string, data: any, res: Response, optional?: object): Promise<any> {
        return res.status(statusCode).send({error, message, data, ...optional});
    }

}


export const newSessionController = async (userService: UserServiceInterface, sessionService: SessionServiceInterface) => {
    return new SessionController(userService, sessionService);
}

