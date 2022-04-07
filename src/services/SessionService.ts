import {SessionServiceInterface} from "../contract/SessionServiceInterface";
import {SessionRepositoryInterface} from "../contract/SessionRepositoryInterface";
import {SessionInterface} from "../contract/SessionInterface";


export class SessionService implements SessionServiceInterface {
    constructor(private sessionRepository: SessionRepositoryInterface) {
        this.sessionRepository = sessionRepository;
    }

    public async create(userId: string, userAgent: string): Promise<{ message: string; session: SessionInterface | null; }> {
        const sessionObj = {
            user: userId,
            userAgent,
            valid: true
        }

        const session = await this.sessionRepository.create(sessionObj as SessionInterface);
        return {message: "Session has been created!", session: session};
    }
}

export const newSessionService = async (sessionRepository: SessionRepositoryInterface) => {
    return new SessionService(sessionRepository)
}

export default SessionService;

