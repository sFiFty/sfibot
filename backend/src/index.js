const express = require('express');
const { client } = require('./bot');
const { getAll } = require('./firestoreApi/commands');
const app = express();
const port = 3000;

client.connect();

app.get('/commands', async (req, res) => {
  const commands = await getAll();
  res.send(commands);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});