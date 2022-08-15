import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import client from './database/clientConnect.js';
import { router } from './routes/routes.js';

//import { log } from './middlewares/log.js';

dotenv.config();

//const clients = client(process.env.DATABASE);

const clients = client();

const connectionDatabase = async () => {
  try {
    await clients.connect();
    console.log('📦📦 Database connected!');
    const result = await clients.query('SELECT id, "name", "phone" FROM public."User"');
    console.table(result.rows);
  } 
  catch (ex) {
    console.log('Error connectionDatabase. Error: ' + ex);
  }
};

connectionDatabase();

const app = express();

// o app.use na verdade está injetando um middleware
app.use(bodyParser.json());

//app.use(log);


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