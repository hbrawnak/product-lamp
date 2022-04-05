import {model, Schema} from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import {UserInterface} from "../contract/UserInterface";

const userSchema = new Schema<UserInterface>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {timestamps: true});

userSchema.pre("save", async function (next) {
    let user = this as UserInterface;

    try {
        if (!user.isModified("password")) {
            return next();
        }

        const salt = await bcrypt.genSalt(config.get<number>('SALT_WORK_FACTOR'));
        user.password = await bcrypt.hash(user.password, salt);

        return next();
    } catch (e) {
        return next(e);
    }
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    const user = this as UserInterface;
    return bcrypt.compare(password, user.password).catch((e) => false);
}

const User = model<UserInterface>('User', userSchema);

export default User;