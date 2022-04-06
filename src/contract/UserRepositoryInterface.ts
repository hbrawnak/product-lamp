import {UserInterface} from "./UserInterface";

export interface UserRepositoryInterface {
    create(user: UserInterface): Promise<UserInterface>;

    getByUserId(userId: string): Promise<UserInterface | null>;

    getByEmail(email: string): Promise<UserInterface | null>;
}