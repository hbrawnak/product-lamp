const { MongoClient } = require('mongodb');
import config from "config";
import logger from "./logger";

async function initializeDBConnection() {
    const dbURL = config.get<string>('dbURL');
    const client = new MongoClient(dbURL);

    try {
        await client.connect();
        logger.info(`Database connected`)
    } catch (error) {
        logger.error(`Could not connect to database`);
        process.exit(1);
    } finally {
        await client.close();
    }

}

export default initializeDBConnection;