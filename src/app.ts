import express from 'express'
import config from 'config'
import initializeDBConnection from "./infra/connect";

const app = express();
const port = config.get<number>('port');

app.listen(port, async () => {
    console.log("App is running ..")

    await initializeDBConnection();
});