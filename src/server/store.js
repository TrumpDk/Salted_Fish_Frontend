import createSagaMiddleware, { END } from "redux-saga"
import { createStore, applyMiddleware } from "redux"
import reducers from '../reducer'
import rootSaga from '../saga'

const sagaMiddleWare = createSagaMiddleware();

export default () => {
    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleWare)
    );

    const tasks = sagaMiddleWare.run(rootSaga)

    store.close = () => store.dispatch(END);

    return { store, tasks };
}