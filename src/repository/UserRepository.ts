import {Model} from "mongoose";
import {UserInterface} from "../contract/UserInterface";
import {UserRepositoryInterface} from "../contract/UserRepositoryInterface";

export class UserRepository implements UserRepositoryInterface {
    constructor(private user: Model<UserInterface>) {
        this.user = user;
    }

    public async create(user: UserInterface): Promise<UserInterface> {
        return this.user.create(user);
    }

    public async getByUserId(userId: string): Promise<UserInterface | null> {
        return this.user.findOne({ _id: userId });
    }

    public async getByEmail(email: string): Promise<UserInterface | null> {
        return this.user.findOne({ email });
    }
}

export const newUserRepository = async (user: Model<UserInterface>): Promise<UserRepositoryInterface> => {
    return new UserRepository(user);
}

export default UserRepository;