const React = require('react');
const Layout = require('./Layout');

module.exports = function Main() {
    return (
      <Layout>
        <form id="form" action="/" method="post">
            <input type="text" name="player_name" />
            <button type="submit">Play</button>
            </form>
      </Layout>
    );
  };
  