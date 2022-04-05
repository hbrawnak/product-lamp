import {UserInterface} from "./UserInterface";

export interface UserServiceInterface {
    create(user: UserInterface): Promise<UserInterface> | null;

    getByUserId(userId: string): Promise<UserInterface> | null

    getByEmail(userId: string): Promise<UserInterface> | null
}