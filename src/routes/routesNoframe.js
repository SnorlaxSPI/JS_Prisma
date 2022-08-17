import Router from 'express';
import client from '../services/servicesNoframe.js';

const router = Router();

router.get('/clients', client.noFrame_get);  

//const { post_controller } = client;
//router.post('/clients', client.post_controller);

//const { put_controller } = client;
//router.put('/clients', client.put_controller);

//const { delete_controller } = client;
//router.delete('/clients/:id', client.delete_controller);

export { router };

