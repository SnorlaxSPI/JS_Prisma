import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";

const clients = [];

const prisma = new PrismaClient();

// middleware

//export const prismaFramework = async(request, response, next) => {
//  const { phone } = request.body;
//
//    let user = await prisma.user.findFirst({ where: { phone } });
//  
//    if (user) {
//      return response.status(400).json({ error: "Já existe um usuário com este telefone" });
//    }
//
//  return next();
//  };

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

//  async put_controller(request, response) {
//    const { id, name }  = request.body;
//
//    let user = await prisma.user.findFirst({ where: { id: uuidv4(id) } });
//
//    await requester.update({
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
//};
};
