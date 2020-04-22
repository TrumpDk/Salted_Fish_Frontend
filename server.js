import path from 'path'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import createStore from './src/server/store'
import { matchPath } from 'react-router-dom'
import routerList from './src/router/routers'
require('./ignore')(); // in server side,nodejs can't resolve css files

const app = new express();

app.use('/assets', express.static(__dirname + '/dist/client'));

const nodeStats = path.resolve(
  __dirname,
  './dist/server/loadable-stats.json',
)

const webStats = path.resolve(
  __dirname,
  './dist/client/loadable-stats.json',
)

app.get('*', (req, res) => {

  const nodeExtractor = new ChunkExtractor({
    statsFile: nodeStats,
    entrypoints: ['server']
  })
  const { default: Entry } = nodeExtractor.requireEntrypoint();

  const { store, tasks } = createStore();

  const routes = matchPath(req.url, routerList);

  routes.path.prefetchData(store);

  store.close(); // must dispatch end here

  tasks.toPromise().then(() => {
    const initState = store.getState();
    console.log('init state', initState);
    const App = Entry(req.url, store);

    const webExtractor = new ChunkExtractor({
      statsFile: webStats,
      entrypoints: ['client']
    })
    const jsx = webExtractor.collectChunks(App)

    const html = renderToString(jsx)

    res.set('content-type', 'text/html')
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
	      <meta charset="UTF-8">
	      <title>没有理想和咸鱼有啥分别</title>
	      <link rel="icon" type="image/png" href="assets/icon/favicon.ico">
        ${webExtractor.getLinkTags()}
        ${webExtractor.getStyleTags()}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
        <script src="https://at.alicdn.com/t/font_1416198_ahu5115sos.js"></script>
        <script>
            if ('addEventListener' in document) {
                  document.addEventListener('DOMContentLoaded', function() {
                      FastClick.attach(document.body);
                }, false);
            }
            if(!window.Promise) {
                document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
            }
            window.__INITIAL_STATE__ = ${JSON.stringify(initState)}
        </script>
        </head>
        <body>
          <div id="app">${html}</div>
        ${webExtractor.getScriptTags()}
        </body>
      </html>
    `)
  })
})

app.listen(8082, () => { console.log('app is running at port 8082') });