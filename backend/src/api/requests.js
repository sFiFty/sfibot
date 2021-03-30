const { getAll, updateOne } = require('../firestoreApi/requests');
const { validate, Joi } = require('express-validation');

const ROUTE = '/requests'

const updateValidation = {
  body: Joi.object({
    id: Joi.string().required(),
    isCompleted: Joi.bool().required(),
  }),
}

module.exports = function(app) {

   app.get(ROUTE, async (req, res) => {
    const requests = await getAll();
    res.send(requests);
  });

  app.patch(ROUTE, validate(updateValidation, { keyByField: true }, { abortEarly: false }), async (req, res) => {
    const request = await updateOne(req.body);
    res.send(request);
  });
}