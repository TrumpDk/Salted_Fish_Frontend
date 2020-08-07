import React, { useEffect } from 'react'
import './cateList.scss'
import SearchBar from '../../component/SearchBar/SearchBar'
import * as cateListAction from '../../../action/cateListAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter, useLocation, useHistory } from 'react-router-dom'

const CateList = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const location = useLocation();

    const queryString = location.search;

    let cateId = queryString.substring(8, queryString.length);

    const reqAction = cateListAction.fetchCateListData(queryString);

    const { cateList, subCateList } = useSelector(state => state.cateList);

    const navigateTo = (cateId, sub_Cate_Id) => {
        history.push(`/List?cateId=${cateId}&subCateId=${sub_Cate_Id}`);
    }

    let targetCate = null;

    if (cateList.length > 0) {
        if (!cateId) {
            cateId = cateList[0].cate_Id;
        }
        targetCate = cateList.filter(item => item.cate_Id == cateId)[0];
    }

    useEffect(() => {
        dispatch(reqAction);
    }, [location.search])

    return (
        <div className="catelist_wrapper">
            <div className="cate_search_bar_content">
                <SearchBar />
            </div>
            <div className="cate_container">
                <div className="cate_detail_list border">
                    <ul className="cate_items_container">
                        {
                            cateList.map((item) => (
                                <Link to={`/Category?cateId=${item.cate_Id}`} key={item.cate_Id}>
                                    <li className={targetCate.cate_Id == item.cate_Id ? "cate_active" : null}>
                                        <a>{item.cate_Title}</a>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className="cate_detail_item">
                    <div className="subcate_list">
                        <div className="sub_banner">
                            {
                                targetCate ?
                                    <img src={targetCate.background_Img} className="banner_img" alt="load img faled"></img> : null
                            }
                        </div>
                        <div className="sub_cate_list">
                            <ul>
                                {
                                    subCateList.map(item => (
                                        <li key={item.sub_Cate_Id} className="sub_cate_item" onClick={() => { navigateTo(cateId, item.sub_Cate_Id) }}>
                                            <div className="cate_img_container">
                                                <img src={item.subCate_Img} className="cate_img" />
                                            </div>
                                            <div className="cate_item_title">
                                                {item.subCate_Title}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default withRouter(CateList);