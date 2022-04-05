import {Request, Response} from "express";

export interface UserControllerInterface {
    create(req: Request, res: Response): any
}