 //mmiddlewares de validação
 import { PrismaClient } from "@prisma/client";

 const prisma = new PrismaClient();

export const prismaFramework = async(request, response, next) => {
  const { phone } = request.body;

    let user = await prisma.user.findFirst({ where: { phone } });
  
    if (user) {
      return response.status(400).json({ error: "Já existe um usuário com este telefone" });
    }

  return next();
  };
