import express, {Express ,Request, Response } from 'express';
import {BACKEND_URL} from "@repo/common/config";

const app: Express = express();
console.log(BACKEND_URL);


app.get('/', (req:Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(3000)