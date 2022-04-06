import {Response} from "express";

export abstract class Controller {
    abstract sendResponse(statusCode: number, error: boolean, message: string, data: string, res: Response);
}