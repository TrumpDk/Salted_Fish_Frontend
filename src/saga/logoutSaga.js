import ActionList from '../action/actionsList'
import { takeLatest } from 'redux-saga/effects'

const logoutSaga = () => {

}

function* root() {
    yield takeLatest(ActionList.Log_Out_Request, logoutSaga);
}

export default root;