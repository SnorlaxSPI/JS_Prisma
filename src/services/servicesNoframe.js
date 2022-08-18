import client from '../database/clientConnect.js';
import { v4 as uuidv4 } from "uuid";

// tera que receber uma conexão
// terá um método create, delete, put , post ,get

export default {
  async noFrame_get(request, response) {
    try {
        const clients = client(process.env.DATABASE);

        await clients.connect();
        const result = await clients.query('SELECT id, "name", "phone" FROM public."User"');
        //console.table(result.rows);
        response.status(200).json(result.rows);
      } 
      catch (ex) {
      console.log('Error connectionDatabase. Error: ' + ex);
    }
  },

  async noFrame_post(request, response) {
    try {
        const clients = client(process.env.DATABASE);

      const user = {
        id: uuidv4(),
        name : request.body.name,
        phone: request.body.phone
      };
      await clients.connect();
      const query = 'INSERT INTO "User" (id, name, phone) VALUES ($1, $2, $3)';
        //console.table(result.rows);      
      const values = [ user.id, user.name, user.phone ];
      const result = await clients.query(query, values);
      response.status(201).json(user);
      } 
      catch (ex) {
      console.log('Error connectionDatabase. Error: ' + ex);
    }
  } 
}


