import { Router } from 'express';
import { convertCLTToPJ } from '../03-controllers/calculator-controller';
var TDDrouter = Router();
TDDrouter
    //.all("/*", authenticateToken)
    .get('/salary', convertCLTToPJ);
export { TDDrouter };
