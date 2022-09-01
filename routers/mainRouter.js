

app.get('/', (req, res) => {
    const home = React.createElement(Home);
    const html = ReactDOMServer.renderToStaticMarkup(main);
    
    res.write('<!DOCTYPE html>');
    res.end(html);
  })