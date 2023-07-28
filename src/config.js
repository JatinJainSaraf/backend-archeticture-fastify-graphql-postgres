import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV
export const PG = {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    dialect: process.env.PG_DIALECT,
    port: process.env.PG_PORT
}