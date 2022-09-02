const React = require('react');
const Layout = require('./Layout');

module.exports = function Main() {

    return (
      <Layout>
        <div className = "mainDiv shadow-lg p-3 mb-5 bg-body rounded">
        <h1>Введите имя игрока</h1>
        <div className="mb-3">
        </div>
        <form id="form" action="/" method="post">
   
          <br />
        <div className="mb-3">
            <input type="text" className="form-control" name="player_name" />
            </div>
            
            <button type="submit" className = "btn btn-outline-primary">Вперед!</button>
            </form>
            </div>
      </Layout>
    );
  };
  

