import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server';
import App from './src/shared/page/App/App' // render a react component
import template from './src/server/template'; // import this functionality to avoid reading a html file

const server = express();

server.use('/assets', express.static(__dirname + '/dist'));

server.get('*', (req, res) => {
  console.log('url is ' +  req.url);
  const context = {};
  const appString = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  res.send(template({
    body: appString,
    title: 'Salted Fish',
  }));
});

server.listen(8082);
console.log('the express server is listening at port 8082');