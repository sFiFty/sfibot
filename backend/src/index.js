const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./bot');
const { ValidationError } = require('express-validation');
const app = express();
app.use(express.json());
app.use(cors());
require('./api/commands')(app);
require('./api/visitors')(app);
require('./api/inputs')(app);
require('./api/requests')(app);

const port = 3001;

app.use(function(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }
  return res.status(500).json(err)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});