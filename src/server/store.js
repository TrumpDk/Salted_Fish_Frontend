import createSagaMiddleware, { END } from "redux-saga"
import { createStore, applyMiddleware } from "redux"
import reducers from '../redux/reducers'

const sagaMiddleWare = createSagaMiddleware();

export default (initialState) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(sagaMiddleWare)
    );

    store.runSaga = sagaMiddleWare.run;

    store.close = () => store.dispatch(END);

    return store;
}