require('@babel/register');
const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 3000;
const testConnection = require('./testconnection');

const themeRouter = require('./routers/themeRouter')

const config = require('./config/config');

config(app);

app.use('/themes', themeRouter);

app.listen(PORT, () => {
  try {
    console.log(`Сервер запущен на порту ${PORT}`);
    testConnection();
  } catch (error) {
    console.log(error.message);
  }
});
