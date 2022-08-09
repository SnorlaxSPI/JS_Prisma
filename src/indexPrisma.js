import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import clientConnectPrisma from './database/clientConnectPrisma.js';
import { prismaFramework } from './services/verify.js';

//import { log } from './middlewares/log.js';
import { router } from './routes/routesPrisma.js';

dotenv.config();

const client = clientConnectPrisma(process.env.DATABASE);

client.connect()
.then(() => console.log('📦📦 Database connected!'))

const app = express();

// o app.use na verdade está injetando um middleware
app.use(bodyParser.json());

//app.use(log);
app.use(prismaFramework);

app.use(router);

app.listen(3000);

const serverCallback = () => {
  console.log('🚀🚀 Server Started!')
}

export default ( port , callback = serverCallback ) => {
  app.listen(port, callback);
}

serverCallback();

export { app };