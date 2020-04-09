import express from 'express';
import { renderToString } from 'react-dom/server';
import bodyParser from 'body-parser';
import cookiePaser from 'cookie-parser';
import * as path from 'path'
import { ChunkExtractor } from '@loadable/server'
import createApp from './src/server/entry'

const server = express();

server.use('/assets', express.static(__dirname + '/dist/client/resource'));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(cookiePaser());

const clientStatsFile = path.resolve('./dist/client/resource/loadable-stats.json');

// const serverStatsFile = path.resolve('./dist/server/resource/loadable-stats.json');

// const nodeExtractor = new ChunkExtractor({
//   statsFile: serverStatsFile,
//   entrypoints: ['server']
// });

const webExtractor = new ChunkExtractor({
  statsFile: clientStatsFile,
  entrypoints: ['client']
});

// const { default: createApp } = nodeExtractor.requireEntrypoint();

server.use((req, res) => {
  
  const ServerApp = createApp({}, req.url);

  console.log('app returned', ServerApp);

  const jsx = webExtractor.collectChunks(ServerApp);

  console.log('jsx is a', jsx);

  console.log('render to string', renderToString(jsx));

  // store.runSaga(rootSaga).toPromise().then(() => {
  //   res.status(200).send(template({
  //     body: renderToString(comToBeRendered),
  //     title: 'Salted Fish',
  //     state: JSON.stringify(store.getState())
  //   }))
  // }).catch((err) => {
  //   res.status(500).send(err.message);
  // });

  // renderToString(comToBeRendered);

  // store.close();

});

server.listen(8082);
console.log('the express server is listening at port 8082');