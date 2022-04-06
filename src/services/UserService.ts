import {UserInterface} from "../contract/UserInterface";
import {UserServiceInterface} from "../contract/UserServiceInterface";
import {UserRepositoryInterface} from "../contract/UserRepositoryInterface";

export class UserService implements UserServiceInterface {
    constructor(private userRepository: UserRepositoryInterface) {
        this.userRepository = userRepository;
    }

    public async create(user: UserInterface): Promise<{ message: string; user: UserInterface | null; }> {

        const exisingUser = await this.userRepository.getByEmail(user.email);
        if (!exisingUser) {
            return {message: "User has been created!", user: await this.userRepository.create(user)};
        }

        return {message: "User is exist already!", user: null};
    }
}

export const newUserService = async (userRepository: UserRepositoryInterface) => {
    return new UserService(userRepository)
}

export default UserService;

