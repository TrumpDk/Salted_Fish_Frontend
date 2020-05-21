import { combineReducers } from "redux";
import homeData from './homeReducer'
import checkLogin from "./checkLogin";

const combinedReducers = combineReducers({
    homeData,
    checkLogin
});

export default combinedReducers;