import {model, Schema} from "mongoose";
import {SessionInterface} from "../contract/SessionInterface";

const sessionSchema = new Schema<SessionInterface>({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    valid: {type: Boolean, default: true},
    userAgent: {type: String},
}, {timestamps: true});

const Session = model<SessionInterface>('Session', sessionSchema);

export default Session;