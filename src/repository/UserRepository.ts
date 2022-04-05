import {Model} from "mongoose";
import {UserServiceInterface} from "../contract/UserServiceInterface";
import {UserInterface} from "../contract/UserInterface";

export class UserRepository implements UserServiceInterface {
    constructor(private user: Model<UserInterface>) {
        this.user = user;
    }

    public async create(user: UserInterface): Promise<UserInterface | null> {
        return this.user.create(user);
    }

    public async getByEmail(userId: string): Promise<UserInterface | null> {
        return null;
    }

    public async getByUserId(userId: string): Promise<UserInterface | null> {
        return null;
    }

}

export const newUserRepository = async (user: Model<UserInterface>): Promise<UserServiceInterface> => {
    return new UserRepository(user);
}

export default UserRepository;