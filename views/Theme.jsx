/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
const React = require('react');
// const Layout = require('./Layout');

function Theme({ theme }) {
  return (
    <div className="themeDiv shadow-lg p-3 mb-5 bg-body rounded">
      <p><h1>{theme.title}</h1></p>
      <div>
        <img className="imgTheme" src={theme.cover} alt={theme.id} />
      </div>
      <div className="button">
        <a href={`/question/${theme.id}/1`}>
          <button className="btn btn-outline-primary">
            Выбрать тему
            {' '}
            {theme.id}
          </button>
        </a>
      </div>
    </div>
  );
}
module.exports = Theme;
