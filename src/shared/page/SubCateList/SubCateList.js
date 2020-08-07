import React, { useEffect } from 'react'
import { Tabs } from 'antd-mobile'
import './SubCateList.scss'
import TopBar from '../../component/TopBar/TopBar'
import ActionList from '../../../action/actionsList'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import parseUrlParam from '../../utils/parseToObject'
import Observer from '../../component/ComponentObserveble/ComponentObserveble'

const SubCateList = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const location = useLocation();

    const queryString = location.search;

    const targetObj = parseUrlParam(queryString);

    const { subCateItems, subCateLists } = useSelector(state => state.subCateItems);

    let page = 0;
    subCateLists.forEach((element, index) => {
        if (element.sub_Cate_Id == targetObj.subCateId) {
            page = index;
        }
    });

    const tabItems = subCateLists.map(item => {
        item.title = item.subCate_Title;
        return item;
    });

    const changeSubCate = ({ cate_Id, sub_Cate_Id }) => {
        history.push(`List?cateId=${cate_Id}&subCateId=${sub_Cate_Id}`);
    }

    useEffect(() => {
        dispatch({ type: ActionList.Load_SubCateItems_Request, params: queryString });
    }, [queryString])
    return (
        <div>
            <TopBar></TopBar>
            <Tabs tabs={tabItems} page={page} onTabClick={(tab) => { changeSubCate(tab) }}></Tabs>
            <div className="subcate_items_content">
                <Observer imgList={subCateItems} />
            </div>
            <div className="subcate_bottom">已显示所有商品</div>
        </div>
    )
}

export default SubCateList