const React = require('react');
const Layout = require('./Layout');

module.exports = function Main() {
  return (
    <Layout>
      <form id="form" action="/" method="post">
        <input type="text" name="inputAnswer" />
        <button type="submit">Введите ответ</button>
      </form>
    </Layout>
  );
};
