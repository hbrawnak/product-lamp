import {Request, Response, NextFunction} from "express";
import {AnyZodObject} from "zod";

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        next();
    } catch (e: any) {
        return sendResponse(400, true, "ERROR", e.errors, res);
    }
}

const sendResponse = (statusCode: number, error: boolean, message: string, data: string, res: Response) => {
    return res.status(statusCode).send({error, message, data});
}

export default validate;