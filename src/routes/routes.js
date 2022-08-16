import Router from 'express';
import client from '../services/requester.js';
import { noFramework } from '../services/requester.js';

const router = Router();

const { get_controller } = client;
router.get('/clients', noFramework);  

//const { post_controller } = client;
//router.post('/clients', client.post_controller);

//const { put_controller } = client;
//router.put('/clients', client.put_controller);

//const { delete_controller } = client;
//router.delete('/clients/:id', client.delete_controller);

export { router };

