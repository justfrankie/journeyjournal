
import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
import getAllEntries from '../database/entries.js'

app.use(express.static(path.join(__dirname, 'build')));
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.get('/entries/all', async (req, res) => {
  try {
    const results = await getAllEntries();
    return res.send(results);
  } catch (error) {
    // Handle the error here
    console.error('An error occurred:', error);
    return res.status(500).send('Internal Server Error');
  }
});

// app.get('/user/:id', async (req, res, next) => {
//   const user = await getUserById(req.params.id)
//   res.send(user)
// })

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is listening on port ${process.env.PORT || 8080}`);
});