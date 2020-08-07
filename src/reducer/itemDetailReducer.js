import ActionList from '../action/actionsList'

const initState = {
    isLoaded: false,
    itemImgList: [],
    itemAttrList: [],
    itemDetailList: [],
    itemPolicyList: [],
    itemSpecPriceList: [],
    recommendReason: '',
    item_Detail: '',
    item_Limit: '',
    desc_Detail: '',
    items_Id: null,
    item_Spec_Price: null
}

const itemDetailReducer = (state = initState, action) => {
    const { type, param } = action;
    switch (type) {
        case ActionList.Load_Item_Detail_Success:
            return {
                ...state, isLoaded: true, itemImgList: param.itemImgList,
                itemAttrList: param.itemAttrList, itemDetailList: param.itemDetailList,
                itemPolicyList: param.itemPolicyList, itemSpecPriceList: param.itemSpecPriceList,
                recommendReason: param.recommendReason, item_Detail: param.item_Detail, item_Limit: param.item_Limit,
                desc_Detail: param.desc_Detail, items_Id: param.items_Id, item_Spec_Price: param.item_Spec_Price
            };
        case ActionList.Load_Cate_Request_Failed:
            return state;
        default: return state;
    }
}

export default itemDetailReducer;