import { all, fork } from '@redux-saga/core/effects';
import home from './Home'

export default function* root() {
    yield all([
        fork(home)
    ]);
}