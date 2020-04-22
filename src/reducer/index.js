import { combineReducers } from "redux";
import logIn from './logInReducer'
import homeData from './homeReducer'

const combinedReducers = combineReducers({
    logIn,
    homeData
});

export default combinedReducers;