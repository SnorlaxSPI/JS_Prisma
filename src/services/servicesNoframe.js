import client from '../database/clientConnect.js';

// tera que receber uma conexão
// terá um método create, delete, put , post ,get

const clients = client(process.env.DATABASE);

export const noFramework = async (request, response) => {
  try {
    await clients.connect();
    const result = await clients.query('SELECT id, "name", "phone" FROM public."User"');
    //console.table(result.rows);
    response.status(201).json(result.rows);
  } 
  catch (ex) {
    console.log('Error connectionDatabase. Error: ' + ex);
  }
};