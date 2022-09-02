const themeRouter = require('express').Router();
const ThemesList = require('../views/ThemesList');
const { Theme } = require('../db/models');

themeRouter.get('/', async (req, res) => {
    const themes = await Theme.findAll({raw:true});
    res.renderComponent(ThemesList, {themes});
    console.log(themes.title);
  });

//   themeRouter.post('/themes', async (req, res) => {
     
//   });

  module.exports = themeRouter;

