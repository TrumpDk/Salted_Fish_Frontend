// export const example = parem => ({
//     type: 'take_example',
//     parem: parem
// });
import ActionList from './actionsList'

export const fetchCommodityData = param => ({
    type: ActionList.Home_Data_Request,
    param
})