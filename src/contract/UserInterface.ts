import {Document} from "mongoose";

export interface UserInterface extends Document {
    name: string,
    email: string,
    password: string,
    createdAt?: Date;
    updatedAt?: Date;

    comparePassword(password: string): Promise<boolean>;
}