import { combineReducers } from "redux";
import homeData from './homeReducer'
import checkLogin from "./checkLogIn";

const combinedReducers = combineReducers({
    homeData,
    checkLogin
});

export default combinedReducers;