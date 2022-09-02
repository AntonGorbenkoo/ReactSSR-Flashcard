const React = require('react');
const Layout = require('./Layout');

function Theme({theme}){
    return(
        <div>
           <form>
            <p>{theme.title}</p>
            <img src={theme.cover} alt={theme.id} />
            <button>Выбрать тему</button>
           </form>
        </div>
    )
};
module.exports = Theme