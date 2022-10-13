import express, { Express } from 'express';
import index from "./routes/index.route";

const app: Express = express();

app.use(express.json())

app.use('/', index);

app.listen(5000, () => {
    console.log("server is listening...")
})