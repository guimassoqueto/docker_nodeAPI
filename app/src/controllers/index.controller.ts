import { Request, Response } from "express";
import { IndexRequest } from "../types";
import { db } from "../db";

db.connect()

function getIndex(_: Request, res: Response) {
    res.status(200).json({
        index: "index page"
    })
}

async function postIndex(req: Request, res: Response) {
    const { username, email, password } = req.body as IndexRequest;
    if (!username || !email || !password) res.status(400).json({error: "invalid body"});

    try {
        const result = await db.query('INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *',
                                   [username, email, password])
        return res.status(201).json({ok: "ok"})
    } catch (err) {
        return res.status(400).json({error: "error"})
    }
}

export { getIndex, postIndex };