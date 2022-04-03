import express from 'express'
import config from 'config'
import initializeDBConnection from "./infra/connect";
import logger from "./infra/logger";

const app = express();
const port = config.get<number>('port');

app.listen(port, async () => {
    logger.info(`App is running at http://localhos:${port}`)

    await initializeDBConnection();
});