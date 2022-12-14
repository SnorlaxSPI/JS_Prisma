import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import client from './database/clientConnect.js';
import { router } from './routes/routesNoframe.js';

//import { log } from './middlewares/log.js';

dotenv.config();

const clients = client(process.env.DATABASE);

clients.connect()
.then(() => console.log('π¦π¦ Database connected!'))

const app = express();

// o app.use na verdade estΓ‘ injetando um middleware
app.use(bodyParser.json());

//app.use(log);


app.use(router);

app.listen(3000);

const serverCallback = () => {
  console.log('ππ Server Started!')
}

export default ( port , callback = serverCallback ) => {
  app.listen(port, callback);
}

serverCallback();

export { app };