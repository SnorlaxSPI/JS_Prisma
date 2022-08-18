import Router from 'express';
import client from '../services/servicesNoframe.js';
import { no_prismaframework } from '../services/verify.js';

const router = Router();

router.get('/clients', client.noFrame_get);  
router.post('/clients', no_prismaframework, client.noFrame_post);

//const { put_controller } = client;
//router.put('/clients', client.put_controller);

//const { delete_controller } = client;
//router.delete('/clients/:id', client.delete_controller);

export { router };

