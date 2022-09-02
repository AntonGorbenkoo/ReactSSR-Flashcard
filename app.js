require('@babel/register');

const express = require('express');
const { sequelize } = require('./db/models');

const app = express();

const PORT = process.env.PORT ?? 3000;
const testConnection = require('./testconnection');

const config = require('./config/config');
const mainRouter = require('./routers/mainRouter');

config(app);


app.use('/', mainRouter)


app.listen(PORT, () => {
  try {
    console.log(`Сервер запущен на порту ${PORT}`);
    testConnection();
  } catch (error) {
    console.log(error.message);
  }
});
