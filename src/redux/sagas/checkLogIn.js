import actionList from '../actions/actionsList'
import { call, put, takeLatest } from 'redux-saga/effects'
import httpService from '../../http/httpList'
import before from './commonSaga'

function* checkLogInSaga() {
    try {
        const data = yield call(httpService.checkLogIn, null);
        if (data) {
            yield put({
                type: actionList.Check_LogIn_Successfull
            })
        }
    } catch (err) {
        yield put({
            type: actionList.Check_LogIn_Failed
        })
    }
}

export default function* root() {
    yield takeLatest(actionList.Check_LogIn_Start, checkLogInSaga);
}