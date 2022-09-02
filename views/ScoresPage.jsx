/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function ScoresPage({ counter }) {
  return (
    <Layout>
      <h1>
        Количество правильных ответов:
        {' '}
        {counter}
      </h1>
      <a href="/themes">
        <button className="btn btn-outline-primary">
          Продолжить игру
          {' '}
        </button>
      </a>
    </Layout>
  );
};
