const themeRouter = require('express').Router();
const ThemesList = require('../views/ThemesList');
const { Theme } = require('../db/models');

themeRouter.get('/', async (req, res) => {
  const themes = await Theme.findAll({ raw: true });
  res.renderComponent(ThemesList, { themes });
  console.log(themes.cover);
});

  // themeRouter.post('/:themeid/start', async (req, res) => {
  //   // first question
  //   res.redirect(`/question/${}`) //themes/2/1
  // });
  // themeRouter.post('/themes', async (req, res) => {
  //   res.redirect(`/question/${}`)
  // });

module.exports = themeRouter;
