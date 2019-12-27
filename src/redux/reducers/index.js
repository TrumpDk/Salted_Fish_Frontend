import { combineReducers } from "redux";
import common from '../reducers/commonReducer'
import logIn from '../reducers/logInReducer'
import homeData from '../reducers/homeReducer'

const combinedReducers = combineReducers({
    common,
    logIn,
    homeData
});

export default combinedReducers;