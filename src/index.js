import App from './shared/page/App/App'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/sagas'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

const jsx = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)
ReactDOM.hydrate(jsx, document.getElementById('app'));