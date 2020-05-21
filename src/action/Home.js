import ActionList from './actionsList'

export const fetchCommodityData = param => ({
    type: ActionList.Home_Data_Request,
    param
})