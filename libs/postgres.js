const {Client} = require('pg');

async function getConexion(){
  const client = new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'Osdo1897',
    database:'app-troya'
  });
  await client.connect();
  return client;
}

module.exports = getConexion;



