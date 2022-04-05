import {Response} from "express";

export abstract class Controller {
    abstract sendResponse(statusCode: number, message: string, data: string, errors: any[], res: Response);
}