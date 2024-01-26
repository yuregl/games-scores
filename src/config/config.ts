import * as dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL, SALT, PORT, DB_URI, DB_NAME } = process.env;

const getConfiguration = () => ({
    dbUrl: DATABASE_URL,
    salt: parseInt(SALT, 10),
    port: parseInt(PORT, 10),
    app: {
        prefix: '/',
    },
    dbConfig: {
        dbUri: DB_URI,
        dbName: DB_NAME,
    },
});

export default getConfiguration;
export type Configuration = ReturnType<typeof getConfiguration>;
