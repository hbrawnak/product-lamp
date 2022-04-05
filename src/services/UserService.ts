import {UserInterface} from "../contract/UserInterface";
import {UserServiceInterface} from "../contract/UserServiceInterface";

export class UserService implements UserServiceInterface {
    constructor(private userRepository: UserServiceInterface) {
        this.userRepository = userRepository;
    }

    public async create(user: UserInterface): Promise<UserInterface | null> {
        return this.userRepository.create(user);
    }

    public async getByEmail(userId: string): Promise<UserInterface | null> {
        return null;
    }

    public async getByUserId(userId: string): Promise<UserInterface | null> {
        return null;
    }
}

export const newUserService = async (userRepository: UserServiceInterface) => {
  return new UserService(userRepository)
}

export default UserService;

