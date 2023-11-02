// db.js
// import postgres from 'postgres'

// const sql = postgres({ /* options */ }) // will use psql environment variables

import pg from 'pg'
const { Client } = pg;
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'journeyjournal',
    user: 'postgres',
    password: '00090',
  })
await client.connect()

export default client