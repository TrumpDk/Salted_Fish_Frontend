import ActionList from '../action/actionsList'
import { put, takeLatest, call } from 'redux-saga/effects'
import httpService from '../http/httpLists';

function* checkLogin() {
    try {
        const { code } = yield call(httpService.checkLogin, null);
        if (code === "200") {
            yield put({ type: ActionList.Check_LogIn_Loged });
        } else {
            yield put({ type: ActionList.Check_LogIn_Not_Loged });
        }
    } catch (error) {
        console.log('check login error', error);
        yield put({ type: ActionList.Check_LogIn_Not_Loged });
    }
}

function* root() {
    yield takeLatest(ActionList.Check_LogIn_Request, checkLogin);
}

export default root;