const { MongoClient, ServerApiVersion } = require('mongodb');
import config from "config";

async function connect() {
    const dbURL = config.get<string>('dbURL');
    const client = new MongoClient(dbURL);

    try {
        await client.connect();
        console.log("Database connected")
    } catch (error) {
        console.log("Could not connect to database");
        process.exit(1);
    } finally {
        await client.close();
    }

}

export default connect;