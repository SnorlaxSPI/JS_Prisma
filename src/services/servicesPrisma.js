import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import client from '../database/clientConnect.js';

const prisma = new PrismaClient();

// tera que receber uma conexão
// terá um método create, delete, put , post ,get

const clients = client(process.env.DATABASE);

export default {
  
  async post_controller(request, response) {
    const { name, phone } = request.body;

    let user = await prisma.user.findFirst({ where: { phone } });

    user = await prisma.user.create({
      data: {
        id: uuidv4(),
        name,
        phone,
      },
    });
    
    response.status(201).json(user);
    console.log(`ID inserido com sucesso ${user.id}`);
  },


async get_controller(request, response) {
  try {
    const user = await prisma.user.findMany();

    response.status(200).json(user);

  } catch (error) {

    return response.json(error);
  }
},

async put_controller(request, response) {
  const { id, name, phone } = request.body;

    let user = await prisma.user.update({
      where: { 
       id,
      },
      data: { name, phone }
    });   
  
  await response.status(200).json(user);
  },
};

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
//};

//export default requester = (databaseClient) => {
//  
//  // popular interface com o tratamento para cada databaseClient
//  
//  const _interface = {
//    id: uuidv4(),
//    name: string,
//    phone: string,
//  };
//
//  return _interface;
//}
