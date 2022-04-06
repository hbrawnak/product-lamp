import {UserInterface} from "../contract/UserInterface";

export class UserSerializer {
    public static async serializer(user: UserInterface) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
        }
    }
}