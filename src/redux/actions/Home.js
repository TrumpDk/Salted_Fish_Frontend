import actionLists from '../actions/actionsList';

export const fetchCommodityData = param => ({
    type: actionLists.Home_Data_Request,
    param
});