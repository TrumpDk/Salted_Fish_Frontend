import ActionList from '../action/actionsList'
import { takeLatest, call, put } from 'redux-saga/effects'
import httpService from '../http/httpLists'

function* subCateItems({ params }) {
    try {
        const { data } = yield call(httpService.getSubCateItems, params);
        yield put({ type: ActionList.Load_SubCateItems_Success, param: data })
    } catch (e) {
        console.log(e.toString());
        yield put({ type: ActionList.Load_SubCateItems_Failed, param: null });
    }

}

export default function* root() {
    yield takeLatest(ActionList.Load_SubCateItems_Request, subCateItems);
}