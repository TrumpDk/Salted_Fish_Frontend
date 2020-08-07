import ActionList from '../action/actionsList'

const initState = {
    subCateLists: [],
    subCateItems: []
}

const subCateItemsReducer = (state = initState, action) => {
    const { type, param } = action;
    switch (type) {
        case ActionList.Load_SubCateItems_Success:
            return { ...state, subCateItems: param.subCateItems, subCateLists: param.subCateLists }
        case ActionList.Load_Cate_Request_Failed:
            return state;
        default: return state;
    }
}

export default subCateItemsReducer;