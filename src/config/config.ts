import * as dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL, SALT, PORT, DB_URI, DB_NAME, SECRET } = process.env;

const getConfiguration = () => ({
    dbUrl: DATABASE_URL || 'mongodb://localhost:27017/games-score',
    salt: parseInt(SALT, 10) || 10,
    port: parseInt(PORT, 10) || 3000,
    app: {
        prefix: '/',
    },
    dbConfig: {
        dbUri: DB_URI || 'mongodb://localhost:27017',
        dbName: DB_NAME || 'games-score',
    },
    secret: SECRET,
});

export default getConfiguration;
export type Configuration = ReturnType<typeof getConfiguration>;
