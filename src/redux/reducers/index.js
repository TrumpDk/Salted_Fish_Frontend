import { combineReducers } from "redux";
import common from '../reducers/commonReducer'
import logIn from '../reducers/logInReducer'

const combinedReducers = combineReducers({
    common,
    logIn
});

export default combinedReducers;