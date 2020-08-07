import ActionList from '../action/actionsList'
import { takeLatest, call, put } from 'redux-saga/effects'
import httpService from '../http/httpLists'

function* ItemDetail({ params }) {
    try {
        const { data, code } = yield call(httpService.getItemDetail, params);
        if (code == '200') {
            yield put({ type: ActionList.Load_Item_Detail_Success, param: data });
        } else {
            yield put({ type: ActionList.Load_Item_Detail_Failed, param: null });
        }
    } catch (e) {
        console.log(e.toStirng());
        yield put({ type: ActionList.Load_Item_Detail_Failed, param: null })
    }
}

export default function* root() {
    yield takeLatest(ActionList.Load_Item_Detail_Request, ItemDetail);
}