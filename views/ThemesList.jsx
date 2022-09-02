const React = require('react');
const Layout = require('./Layout');
const Theme = require('./Theme')

function ThemesList({themes}){
    return(
        <Layout>
<div className = "gallery">
    {themes.map((theme)=><Theme theme={theme} />)}
</div>

        </Layout>
    )
};
module.exports = ThemesList;