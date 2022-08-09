import pg from 'pg';

export default () => {
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
};

//  client.connect();
//  client.query('select * from postgres')
//  .then(results => {
//    const result = results.row
//    console.log(result);
//  })
//  .then(() => console.log('📦📦 Database connected!'))
//