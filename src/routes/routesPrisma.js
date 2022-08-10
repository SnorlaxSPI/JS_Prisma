import Router, { application } from 'express';
import client from '../controllers/indexPrisma.js';
import { prismaFramework } from '../services/verify.js';

const router = Router();

//const { get_controller } = client;
router.get('/clients', client.get_controller);  

//const { post_controller } = client;
router.post('/clients', client.post_controller);

//const { put_controller } = client;
router.put('/clients', client.put_controller);

//const { delete_controller } = client;
//router.delete('/clients/:id', client.delete_controller);

router.use(prismaFramework);

export { router };

