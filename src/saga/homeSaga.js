import ActionList from '../action/actionsList'
import { call, put, takeLatest } from 'redux-saga/effects'
import httpService from '../http/httpLists'

function* homeSaga({ param }) {
    try {
        const { data } = yield call(httpService.loadCommodityForHome, param);
        yield put({ type: ActionList.Home_Data_Request_Successful, data: data });
    } catch (e) {
        yield put({ type: ActionList.Home_Data_Request_Failed });
    }
}

export default function* root() {
    yield takeLatest(ActionList.Home_Data_Request, homeSaga);
}