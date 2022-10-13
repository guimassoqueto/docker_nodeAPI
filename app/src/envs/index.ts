import dotenv from "dotenv";
dotenv.config();

const POSTGRES_DB: string = process.env.POSTGRES_DB!;
const POSTGRES_USER: string = process.env.POSTGRES_USER!;
const POSTGRES_PASSWORD: string = process.env.POSTGRES_PASSWORD!;
const DB_HOST: string = process.env.DB_HOST!;

export {
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    DB_HOST
}