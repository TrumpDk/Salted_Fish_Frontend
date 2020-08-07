import { all, fork } from '@redux-saga/core/effects';
import checkLogin from './checkLogin';
import home from './homeSaga';
import cateList from './cateSaga';
import subCateItems from './subCateItems';
import itemDetail from './LoadItemDetai';

export default function* root() {
    yield all([
        fork(checkLogin),
        fork(home),
        fork(cateList),
        fork(subCateItems),
        fork(itemDetail),
    ]);
}