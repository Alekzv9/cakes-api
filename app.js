const express = require('express');
const bodyParser = require('body-parser');
const cakesController = require('./controllers/cakes.controller');
const errorHandler = require('./util/error-handler');

const app = express();
const PORT = 8000;

// Middlewares
app.use(bodyParser.json());

app.use('/cakes', cakesController);

app.use((error, _req, res, _next) => {
  errorHandler(error, res);
});

app.listen(PORT, () => {
  console.log('Server started');
});
