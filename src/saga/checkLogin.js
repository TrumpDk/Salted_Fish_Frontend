import ActionList from '../action/actionsList'
import { call, put, takeLatest } from 'redux-saga/effects'
import httpService from '../http/httpLists'

function* checkLogin() {
    try {
        const data = yield call(httpService.checkLogIn, null);
        if (data) {
            yield put({
                type: ActionList.Check_LogIn_Successfull
            })
        }
    } catch (err) {
        yield put({
            type: ActionList.Check_LogIn_Failed
        })
    }
}

export default function* root() {
    yield takeLatest(ActionList.Check_LogIn_Start, checkLogin);
}