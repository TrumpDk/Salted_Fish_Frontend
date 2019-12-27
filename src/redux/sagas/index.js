import { all, fork } from '@redux-saga/core/effects';
import checkLogin from './checkLogIn';
import home from './homeSaga'

export default function* root() {
    yield all([
        fork (checkLogin),
        fork (home)
    ]);
}