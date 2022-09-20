const env = process.env;

const db = {
    host: env.DB_HOST,
    database: env.DB_NAME || "demo",
    user: env.DB_USER,
    password: env.DB_PASSWORD,
};

module.exports = db;
