const React = require('react');
const Layout = require('./Layout');

function Theme({theme}){
    return(
           <form>
            <p>{theme.title}</p>
        
            <button>Выбрать тему</button>
           </form>
    )
};
module.exports = Theme