// users.js
import client from './db.js'

 const getAllEntries = async () => {
  // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
  const res = await client.query('SELECT * from entries')
await client.end()
  return res.rows
}

async function getOneEntry(entryId) {
    const entry = await client`
    select *
    from entries where entryId=${entryId}
  `
  return entry
}

async function insertEntry(payload) {
  const entry = await client`
    insert into entries
      (entryId, title, body, date)
    values
      (${ entryId }, ${ title },${ body }, ${ date })
  `
  return 'Successfully entered one entry'
}

export default getAllEntries