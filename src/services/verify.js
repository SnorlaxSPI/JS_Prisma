//mmiddlewares de validação
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import client from '../database/clientConnect.js';

export const prismaFramework = async(request, response, next) => {
  const { phone } = request.body;

    let user = await prisma.user.findFirst({ where: { phone } });
    
    if (user) {
      return await response.status(400).json({ error: "Já existe um usuário com este telefone" });
    }

  return next();
};

export const no_prismaframework = async(request, response, next) => {
  try {
    const clients = client(process.env.DATABASE);

    await clients.connect();
    const query = 'SELECT "phone" FROM "User" where "User".phone = $1';
    const values = [ request.body.phone ];
    const result = await clients.query(query, values);
    const user = result.rows;
  
    if (user.length > 0) {
      return await response.status(400).json({ error: "Já existe um usuário com este telefone" });
    }

  return next();
  
  } 
  catch (ex) {
    console.log(ex);
    return await response.status(400).json({ error: ex });
  }
};