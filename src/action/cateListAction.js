import ActionList from './actionsList'

export const fetchCateListData = param => ({
    type: ActionList.Load_Cate_Request,
    param
})