import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from '../../saga'
import reducer from '../../reducer'
import { composeWithDevTools } from 'redux-devtools-extension'


const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(rootSaga);

export default store;