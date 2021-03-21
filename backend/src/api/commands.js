const { getAll, addNew, updateOne, deleteOne } = require('../firestoreApi/commands');
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

  const deleteCommandValidation = {
    params: Joi.object({
      id: Joi.string().required()
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
      res.status(400).send({
        message: `Command with name ${name} already exists`
      })
    }
    const command = await addNew(req.body);
    res.send(command);
  });

  app.patch('/commands', validate(updateCommandValidation, { keyByField: true }, { abortEarly: false }), async (req, res) => {
    const command = await updateOne(req.body);
    res.send(command);
  });

  app.delete('/commands/:id', async (req, res) => {
    const { id } = req.params;
    const command = await deleteOne(id);
    res.send(command);
  });
}




