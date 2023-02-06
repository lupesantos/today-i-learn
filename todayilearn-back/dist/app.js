import express from 'express';
import { TDDrouter } from './01-routers/TDDrouter';
import cors from 'cors';
var server = express();
server.use(cors());
server.use(express.json());
server.get('/salary', TDDrouter);
server.listen(4000, function () {
    console.log('ta executando........');
});
