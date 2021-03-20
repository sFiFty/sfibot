const { getAll, addNew, updateOne } = require('../firestoreApi/commands');
const { validate, Joi } = require('express-validation');

module.exports = function(app) {
  const createCommandValidation = {
    body: Joi.object({
      name: Joi.string().required(),
      response: Joi.string().required(),
    }),
  }

  const updateCommandValidation = {
    body: Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      response: Joi.string().required(),
    }),
  }
  
  app.get('/commands', async (req, res) => {
    const commands = await getAll();
    res.send(commands);
  });
  
  app.post('/commands', validate(createCommandValidation, { keyByField: true }, { abortEarly: false }), async (req, res) => {
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

  app.patch('/commands', validate(updateCommandValidation, { keyByField: true }, { abortEarly: false }), async (req, res) => {
    const { id } = req.body;
    const commands = await getAll();
  
    if (!commands.find(c => c.id === id)) {
      res.status(409).send({
        message: `Command with id ${id} doesn't exist`
      })
    }
    const command = await updateOne(req.body);
    res.send(command);
  });
}




