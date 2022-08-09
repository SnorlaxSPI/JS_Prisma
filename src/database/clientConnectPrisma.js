import pg from 'pg';

// ideal q essa classe seja passada e função recebida de qual database passar
// criar

export default (database) => {
  let client 
  if (process.env.DATABASE == 'postgres') {
    client = new pg.Client({
      user: 'postgres',
      host:'localhost',
      password: 'root',
      database: 'postgres',
      port: 5432,
    })
  } else if (process.env.DATABASE == 'mongo') {
    client = new mongo.Client({
    })
  }
  return client;
}

