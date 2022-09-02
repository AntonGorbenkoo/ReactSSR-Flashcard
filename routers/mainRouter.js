
const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Home = require('../views/Home');
// const { useReducer } = require('react');
const mainRouter = express.Router();
const { User } = require('../db/models')

mainRouter.get('/', (req, res) => {
    const homePage = React.createElement(Home);
    const html = ReactDOMServer.renderToStaticMarkup(homePage);
    res.write('<!DOCTYPE html>');
    res.end(html);
  })

  mainRouter.post('/', async (req, res) => {
    const newPlayer = req.body.player_name;
    try {
        await User.create({login: newPlayer, score: 0});
        res.redirect('/themes')
    } catch (err) {
        res.send(`Error ${err.message}`);
    }
  })

  module.exports = mainRouter;

