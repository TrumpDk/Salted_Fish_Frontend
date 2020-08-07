import ActionList from '../action/actionsList'

const initState = {
    cateList: [],
    subCateList: []
}

const cateListReducer = (state = initState, action) => {
    const { type, param } = action;
    switch (type) {
        case ActionList.Load_Cate_Request_Successfull:
            return { ...state, cateList: param.cateLists, subCateList: param.subCateLists };
        case ActionList.Load_Cate_Request_Failed:
            return state;
        default:
            return state;
    }
}

export default cateListReducer;