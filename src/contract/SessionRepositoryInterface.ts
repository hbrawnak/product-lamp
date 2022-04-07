import {SessionInterface} from "./SessionInterface";

export interface SessionRepositoryInterface {
    create(session: SessionInterface): Promise<SessionInterface>;

    getByUserId(user: string): Promise<SessionInterface | null>;
}