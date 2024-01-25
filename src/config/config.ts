const { DATABASE_URL, SALT, PORT } = process.env;

const getConfiguration = () => ({
    dbUrl: DATABASE_URL,
    salt: SALT,
    port: PORT,
    app: {
        prefix: '/',
    },
});

export default getConfiguration;
export type Configuration = ReturnType<typeof getConfiguration>;
