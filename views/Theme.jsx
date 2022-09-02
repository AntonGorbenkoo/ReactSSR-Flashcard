const React = require('react');
const Layout = require('./Layout');

function Theme({ theme }) {
  return (
    <div>
        <a href={`/question/${theme.id}/1`}>PUSH ME {theme.id}</a>
      {/* <form method="get" action={`/question/${theme.id}/1`}>
        <p>{theme.title}</p>
        <img src={theme.cover} alt={theme.id} />
        <button>Выбрать тему</button>
      </form> */}
    </div>
  );
}
module.exports = Theme;
