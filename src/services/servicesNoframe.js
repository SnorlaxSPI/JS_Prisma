import client from '../database/clientConnect.js';

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
  } 
}


