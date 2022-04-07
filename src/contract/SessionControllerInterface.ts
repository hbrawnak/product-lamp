import {Request, Response} from "express";

export interface SessionControllerInterface {
    create(req: Request, res: Response): any
}