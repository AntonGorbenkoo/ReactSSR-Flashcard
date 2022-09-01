require('@babel/register');
const express = require('express');

const { sequelize } = require('./db/models');

const { Question } = require('./db/models');


const app = express();

const PORT = process.env.PORT ?? 3000;
const testConnection = require('./testconnection');

const config = require('./config/config');

config(app);

app.get('/counter', (req, res) => {
  req.app.locals.counter += 1;
  res.json({ servAnsw: true });
});

app.get('/question/check/:theme/:question', async (req, res) => {
  const { theme, question } = req.params;
  const themeQuestions = await Question.findAll({ where: { themeId: theme }}, { raw: true });
  // получаем номер вопроса в массиве themeQuestions
});



app.listen(PORT, () => {
  try {
    console.log(`Сервер запущен на порту ${PORT}`);
    testConnection();
  } catch (error) {
    console.log(error.message);
  }
});
