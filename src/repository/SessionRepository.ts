import {Model} from "mongoose";
import {UserInterface} from "../contract/UserInterface";
import {UserRepositoryInterface} from "../contract/UserRepositoryInterface";
import {SessionRepositoryInterface} from "../contract/SessionRepositoryInterface";
import {SessionInterface} from "../contract/SessionInterface";

export class SessionRepository implements SessionRepositoryInterface {
    constructor(private session: Model<SessionInterface>) {
        this.session = session;
    }

    public async create(session: SessionInterface): Promise<SessionInterface> {
        return this.session.create(session);
    }

    public async getByUserId(user: string): Promise<SessionInterface | null> {
        return this.session.findOne({ _id: user });
    }
}

export const newSessionRepository = async (session: Model<SessionInterface>): Promise<SessionRepositoryInterface> => {
    return new SessionRepository(session);
}

export default SessionRepository;