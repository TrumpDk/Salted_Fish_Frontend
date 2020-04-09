import App from '../shared/page/App/App'
import React from 'react'
import { StaticRouter, matchPath } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css'
import { Provider } from 'react-redux'
import createStore from './store'
// import RouterList from '../shared/router/RouterList'

const createApp = (context, url) => {
    const store = createStore();

    console.log('context is', context, 'url is', url, store);

    // const routes = matchPath(url, RouterList);

    // console.log('log info routes', routes);

    // routes.path.prefetchData(store);

    // console.log('task is is a', tasks);

    // tasks.toPromise().then(() => {
    //     console.log('returmsdfe', store.getState());
    // });
    // store.runSage(rootSaga);

    const Entry = (
        <Provider store={store}>
            <StaticRouter context={context} location={url}>
                <App />
            </StaticRouter>
        </Provider>
    )
    return  Entry;
}

export default createApp; 