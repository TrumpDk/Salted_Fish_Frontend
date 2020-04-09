import createSagaMiddleware, { END } from "redux-saga"
import { createStore, applyMiddleware } from "redux"
import reducers from '../redux/reducers'
import rootSaga from '../redux/sagas/index'

const sagaMiddleWare = createSagaMiddleware();

export default (initialState) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(sagaMiddleWare)
    );

    sagaMiddleWare.run(rootSaga)

    store.close = () => store.dispatch(END);

    return store;
}