import React from 'react'
import App from '../shared/page/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../saga'
import { loadableReady } from '@loadable/component'
import { hydrate } from 'react-dom'

const sagaMiddleWare = createSagaMiddleWare();

const initState = window.__INITIAL_STATE__;
console.log('init state is', initState);

const store = createStore(reducer, initState, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

const Entry = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    )
}

loadableReady().then(() => {
    hydrate(<Entry />, document.getElementById('app'))
})