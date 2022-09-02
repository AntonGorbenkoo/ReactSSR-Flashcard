require('@babel/register');

const express = require('express');

const ReactDOMServer = require('react-dom/server');
const React = require('react');
// const { sequelize } = require('./db/models');

const { Question } = require('./db/models');
const { User } = require('./db/models');


const app = express();

const PORT = process.env.PORT ?? 3000;
const testConnection = require('./testconnection');

const themeRouter = require('./routers/themeRouter');

const config = require('./config/config');

const mainRouter = require('./routers/mainRouter');

const QuestionForm = require('./views/QuestionForm');
const ScoresPage = require('./views/ScoresPage');

config(app);

app.use('/', mainRouter);

app.use('/themes', themeRouter);

app.post('/counter', (req, res) => {
  const { inc } = req.body;
  if (inc) res.app.locals.counter = (res.app.locals.counter ?? 0) + 1; // or res ???
  // console.log (req.app.locals.counter);
  res.json({ servAnsw: true });
});

app.post('/question/check', async (req, res) => {
  const { themeNum, questionNum } = req.body;
  const themeQuestions = await Question.findAll({ where: { themeId: themeNum }, raw: true });
  // получаем номер вопроса в массиве themeQuestions
  if (questionNum > themeQuestions.length) res.json({ answ: false });
  else {
    const rightOne = themeQuestions[questionNum - 1].answer;
    res.json({ answ: rightOne });
  }
});

app.get('/question/:theme/:question', async (req, res) => {
  const { theme, question } = req.params;
  const themeQuestions = await Question.findAll({ where: { themeId: theme }, raw: true });
  if (question > themeQuestions.length) res.redirect('/scores');
  else {
    const rightOne = themeQuestions[question - 1].question;
    const idform = `${theme}_${question}`;
    const main = React.createElement(QuestionForm, { formId: idform, questText: rightOne });
    const html = ReactDOMServer.renderToStaticMarkup(main);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
});

app.get('/scores', async (req, res) => {
  const { counter } = res.app.locals;
  const user = await User.findOne({ where: { login: res.app.locals.name } });
  user.score = counter;
  user.save();
  const main = React.createElement(ScoresPage, { counter });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.listen(PORT, () => {
  try {
    console.log(`Сервер запущен на порту ${PORT}`);
    testConnection();
  } catch (error) {
    console.log(error.message);
  }
});
