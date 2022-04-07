import {SessionInterface} from "./SessionInterface";

export interface SessionServiceInterface {
    create(userId: string, userAgent: string):  Promise<{ message: string; session: SessionInterface | null; }>;
}