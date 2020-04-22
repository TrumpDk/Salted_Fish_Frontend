import { put, takeLatest, call } from 'redux-saga/effects'
import httpService from '../http/httpLists'

function* homeSaga({ param }) {
    console.log('hello you got me at hello');
    const { data } = yield call(httpService.loadCommodityForHome, param);
    console.log('sdfd', data);
}

export default function* root() {
    yield takeLatest('take_example', homeSaga);
}