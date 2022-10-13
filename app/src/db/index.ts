import { Client } from "pg";
import { POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER, DB_HOST } from "../envs";

const db: Client = new Client({
    user: POSTGRES_USER,
    host: DB_HOST,
    database: POSTGRES_DB,
    password: POSTGRES_PASSWORD,
    port: 5432,
});

export { db }
