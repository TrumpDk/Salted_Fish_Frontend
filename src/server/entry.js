import React from 'react'
import App from '../shared/page/App'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from './store'
import routerList from '../router/routers'
// import { createStore, applyMiddleware } from 'redux'
// import reducer from '../reducer'
// import createSagaMiddleWare from 'redux-saga';
// import rootSaga from '../saga'

// const sagaMiddleWare = createSagaMiddleWare();

// const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

// sagaMiddleWare.run(rootSaga);

const Server = (url, store) => {

    // const { store, tasks } = createStore();

    // const routes = matchPath(url, routerList);

    // routes.path.prefetchData(store);

    // store.close();

    // tasks.toPromise().then(() => {
    //     console.log('hi there', store.getState());
    // })

    return (
        <Provider store={store}>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </Provider>
    )
}

export default Server