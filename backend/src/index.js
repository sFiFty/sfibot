const express = require('express');
const cors = require('cors');
const { client } = require('./bot');
const { getAll, addNew } = require('./firestoreApi/commands');
const app = express();
const port = 3001;

client.connect();

app.use(express.json());
app.use(cors());

app.get('/commands', async (req, res) => {
  const commands = await getAll();
  res.send(commands);
});

app.post('/commands', async (req, res) => {
  console.log(req.body)
  const command = await addNew(req.body);
  res.send(command);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});