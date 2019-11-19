import ActionList from '../actions/actionsList'
import { put } from 'redux-saga/effects';

export default function before(callback) {
    return function* commonSaga(action) {
        yield put({
            type: ActionList.Start_Animating
        });

        if (callback) {
            yield* callback(action);
        }

        yield put({
            type: ActionList.Stop_Animating
        })
    }
}