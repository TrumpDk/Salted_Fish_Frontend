import { combineReducers } from "redux";
import homeData from './homeReducer';
import checkLogin from "./checkLogIn";
import cateList from './cateReducer';
import subCateItems from './subCateItems';
import itemDetail from './itemDetailReducer';

const combinedReducers = combineReducers({
    homeData,
    checkLogin,
    cateList,
    subCateItems,
    itemDetail
});

export default combinedReducers;