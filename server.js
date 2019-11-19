import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server';
import App from './src/shared/page/App/App' // render a react component
import template from './src/server/template'; // import this functionality to avoid reading a html file
import bodyParser from 'body-parser';
import cookiePaser from 'cookie-parser';
import routerList from './src/shared/router/RouterList'
import reducers from './src/redux/reducers'
import rootSaga from './src/redux/sagas'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import actionsType from './src/redux/actions/actionsList'
import configureStore from './src/server/store'
import actionList from './src/redux/actions/actionsList';


const server = express();
// const baseURL = process.env.NODE_ENV == 'production' ? '139.155.39.75' : 'localhost';

server.use('/assets', express.static(__dirname + '/dist'));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(cookiePaser());
process.env.baseURL = 'http://localhost:8081';

server.get('*', (req, res) => {

  console.log('url is ' + req.url);

  const store = configureStore();

  const context = {};

  const comToBeRendered = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  store.runSaga(rootSaga).toPromise().then(() => {
    console.log('rendertfffffff');
    res.status(200).send(template({
      body: renderToString(comToBeRendered),
      title: 'Salted Fish',
      state: JSON.stringify(store.getState())
    }))
  }).catch((err) => {
    res.status(500).send(err.message);
  });

  renderToString(comToBeRendered);

  console.log('close end');
  store.close();

});

const matchRoute = (url) => {
  for (let item of routerList) {
    if (item.path == url) {
      return false;
    }
  }

  return { isMatched: false, action: { type: actionList } }
}

server.listen(8082);
console.log('the express server is listening at port 8082');