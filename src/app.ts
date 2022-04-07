import express from 'express'
import config from 'config'
import initializeDBConnection from "./infra/database";
import bodyParser from "body-parser";

import routers from "./router";
import logger from "./infra/logger";
import User from "./models/user";
import Session from "./models/session";

import {newUserRepository} from "./repository/UserRepository";
import {newUserService} from "./services/UserService";
import {newUserController} from "./controllers/UserController";
import {newSessionRepository} from "./repository/SessionRepository";
import {newSessionService} from "./services/SessionService";
import {newSessionController} from "./controllers/SessionController";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = config.get<number>('port');

(async () => {
    await initializeDBConnection();

    const userRepo = await newUserRepository(User);
    const userService = await newUserService(userRepo);
    const userController = await newUserController(userService);

    const sessionRepo = await newSessionRepository(Session);
    const sessionService = await newSessionService(sessionRepo);
    const sessionController = await newSessionController(userService, sessionService);

    const routes = await routers(userController, sessionController);
    app.use("/", routes)
})();


app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`)
});