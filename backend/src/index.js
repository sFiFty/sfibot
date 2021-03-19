const express = require('express');
const cors = require('cors');
const { client } = require('./bot');
const { getAll, addNew } = require('./firestoreApi/commands');
const app = express();
const port = 3001;

const { validate, ValidationError, Joi } = require('express-validation')

const loginValidation = {
  body: Joi.object({
    name: Joi.string().required(),
    response: Joi.string().required(),
  }),
}

client.connect();

app.use(express.json());
app.use(cors());

app.get('/commands', async (req, res) => {
  const commands = await getAll();
  res.send(commands);
});

app.post('/commands', validate(loginValidation, { keyByField: true }, { abortEarly: false }), async (req, res) => {
  const { name } = req.body;
  const commands = await getAll();

  if (commands.find(c => c.name === name)) {
    res.status(409).send({
      message: `Command with name ${name} already exists`
    })
  }
  const command = await addNew(req.body);
  res.send(command);
});

app.use(function(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  return res.status(500).json(err)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});