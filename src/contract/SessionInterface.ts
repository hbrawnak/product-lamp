import {Document} from "mongoose";
import {UserInterface} from "./UserInterface";

export interface SessionInterface extends Document {
    user: UserInterface['_id'];
    valid: boolean;
    userAgent: string;
    createdAt?: Date;
    updatedAt?: Date;
}