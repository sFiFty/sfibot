const { getAll, addNew, updateOne, deleteOne } = require('../firestoreApi/inputs');
const { validate, Joi } = require('express-validation');

const ROUTE = '/inputs'

module.exports = function(app) {
  const createInputValidation = {
    body: Joi.object({
      commandName: Joi.string().required(),
      inputName: Joi.string().required(),
    }),
  }

  const updateInputValidation = {
    body: Joi.object({
      id: Joi.string().required(),
      commandName: Joi.string().required(),
      inputName: Joi.string().required(),
    }),
  }

  const deleteCommandValidation = {
    params: Joi.object({
      id: Joi.string().required()
    }),
  }
  
  app.get(ROUTE, async (req, res) => {
    const inputs = await getAll();
    res.send(inputs);
  });
  
  app.post(ROUTE, validate(createInputValidation, { keyByField: true }, { abortEarly: false }), async (req, res) => {
    const { commandName } = req.body;
    const inputs = await getAll();
  
    if (inputs.find(c => c.commandName === commandName)) {
      res.status(400).send({
        message: `Input with name ${commandName} already exists`
      })
    }
    const input = await addNew(req.body);
    res.send(input);
  });

  app.patch(ROUTE, validate(updateInputValidation, { keyByField: true }, { abortEarly: false }), async (req, res) => {
    const input = await updateOne(req.body);
    res.send(input);
  });

  app.delete(`${ROUTE}/:id`, async (req, res) => {
    const { id } = req.params;
    const input = await deleteOne(id);
    res.send(input);
  });
}




