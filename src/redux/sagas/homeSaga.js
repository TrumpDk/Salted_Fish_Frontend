import actionList from '../actions/actionsList'
import { call, put, takeLatest } from 'redux-saga/effects'
import httpService from '../../http/httpList'

function* homeSaga({ param }) {
    console.log('start home saga');
    try {
        const { data } = yield call(httpService.loadCommodityForHome, param);
        yield put({ type: actionList.Home_Data_Request_Successful, param: data });
    } catch (e) {
        yield put({ type: actionList.Home_Data_Request_Failed });
    }
}

export default function* root() {
    console.log('fetch data for home');
    yield takeLatest(actionList.Home_Data_Request, homeSaga);
}