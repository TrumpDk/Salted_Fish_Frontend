import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server';
import App from './src/shared/page/App/App' // render a react component
import template from './src/server/template'; // import this functionality to avoid reading a html file
import bodyParser from 'body-parser';
import http from 'http';

const server = express();
const baseURL = process.env.NODE_ENV == 'production' ? '139.155.39.75' : 'localhost';

server.use('/assets', express.static(__dirname + '/dist'));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
console.log(process.env.NODE_ENV, process.env.baseURL);

server.get('*', (req, res) => {
  console.log('url is ' + req.url);
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

server.post('*', (req, res) => {
  sendRequest(req, 'POST', function (data) {
    console.log('data is', data);
    res.status(200).send(data);
  }), function (data) {
    res.status(400).send({data});
  }
});

const sendRequest = (req, method, callback, failed) => {
  let postData = {};
  if (method == 'POST') {
    // body need to be converted to string by JSON instead of querystring
    postData = JSON.stringify(req.body);
  }
  let options = {
    host: baseURL,
    port: 8081,
    path: req.url,
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length
    }
  }
  let request = http.request(options, function (res) {
    res.setEncoding('utf-8');
    let data = '';
    res.on('data', function (chunk) {
      data = chunk;
    });

    res.on('end', function () {
      callback(JSON.parse(data));
    });

  }).on('error', function (e) {
    console.log(e.stack);
    failed(e.message);
  });

  // send data to api
  request.write(postData);
  request.end();

}

server.listen(8082);
console.log('the express server is listening at port 8082');