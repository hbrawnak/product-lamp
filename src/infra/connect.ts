import {Mongoose, connect} from "mongoose";
import config from "config";
import logger from "./logger";

export class MongoDB {
    dbClient: Mongoose;

    constructor(mongooseClient: Mongoose) {
        this.dbClient = mongooseClient;
    }
}

export const newMongoDB = async (mongooseClient: Mongoose): Promise<MongoDB> => {
    return new MongoDB(mongooseClient);
};

export const initializeDBConnection = async () => {
    try {
        const dbURL = config.get<string>('dbURL');
        await newMongoDB(await connect(dbURL));
        logger.info(`Database connected`)
    } catch (err) {
        logger.error(`Could not connect to database`);
        process.exit(1);
    }
};

export default initializeDBConnection;