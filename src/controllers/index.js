//import requester from '../services/req.js'
//import { client }  from '../database/clientConnect.js';

// tudo que usa prisma será trocado pelo client

//const pool = new client();

export const clients = [];

export default {
//  async post_controller(request, response) {
//    const { name, phone } = request.body;
//
//    let user = await pool.query('INSERT INTO Users');
//
//    if (user) {
//      return response.json({ error: "Já existe um usuário com este telefone" });
//    }

//    user = await client.user.create({
//      data: {
//        id: uuidv4(),
//        name,
//        phone,
//      },
//    });
//
//    response.status(201).json(user);
//    console.log(`ID inserido com sucesso ${user.id}`);
// },

//  async get_controller(request, response) {
//    try {
//      const user = await client.user.findMany();
//
//      response.status(200).json(user);
//    } catch (error) {
//      return response.json(error);
//    }
//  },
//
//  async put_controller(request, response) {
//    const { id, name }  = request.body;
//
//    let user = await requester.findFirst({ where: { id: uuidv4(id) } });
//
//    await client.user.update({
//      where: { 
//        id
//      },
//      data: { name }
//    });

//    if (user == undefined) {
//      response.status(400).send();
//    } else {
//      user.name = nome;

//      response.status(200).json(user);
//  },

//  delete_controller(request, response) {
//    const { id } = request.params;
//    const index = clients.find((value) => value.id == id);
//
//    if (index == -1) {
//      response.status(400).send();
//    } else {
//      clients.splice(index, 1);
//      response.status(204).send();
//    }
//  },
};
