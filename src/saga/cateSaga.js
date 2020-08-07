import ActionList from '../action/actionsList'
import { call, put, takeLatest } from 'redux-saga/effects'
import httpService from '../http/httpLists'

function* fetchCateData({ param }) {
    try {
        const { data } = yield call(httpService.getCates, param);
        yield put({ type: ActionList.Load_Cate_Request_Successfull, param: data });
    } catch (e) {
        console.log(e.toString());
        yield put({ type: ActionList.Load_Cate_Request_Failed })
    }
}

export default function* root() {
    console.log('listen')
    yield takeLatest(ActionList.Load_Cate_Request, fetchCateData);
}