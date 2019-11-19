import { all, fork } from '@redux-saga/core/effects';
import checkLogin from './checkLogIn'

export default function* root() {
    yield all([
        fork (checkLogin)
    ]);
}