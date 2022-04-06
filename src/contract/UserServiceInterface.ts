import {UserInterface} from "./UserInterface";

export interface UserServiceInterface {
    create(user: UserInterface):  Promise<{ message: string; user: UserInterface | null; }>;
}