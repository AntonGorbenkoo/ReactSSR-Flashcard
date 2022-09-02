/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function ScoresPage({ counter }) {
  return (
    <Layout>
      <div className="mainDiv shadow-lg p-3 mb-5 bg-body rounded">
        <h1>
          Количество правильных ответов:

        </h1>
        {' '}
        <h1 className="red">{counter || 0}</h1>

        <a href="/themes">
          <button className="btn btn-outline-primary">
            Продолжить игру
            {' '}
          </button>
        </a>
      </div>
    </Layout>
  );
};
