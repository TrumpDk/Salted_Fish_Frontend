import React, { useEffect } from 'react'
import TopBar from '../../component/TopBar/TopBar'
import { useDispatch, useSelector } from 'react-redux'
import ActionList from '../../../action/actionsList'
import { Carousel } from 'antd-mobile'
import './ItemDetailPage.scss'
import { useLocation, useHistory } from 'react-router-dom'
import IconButton from '../../component/IconButton/IconButton'
import groupBy from '../../utils/groupBy'

const ItemDetailPage = () => {

    const dispatch = useDispatch();

    const queryString = useLocation().search;

    const hash = useLocation().hash;

    const history = useHistory();

    const { itemImgList, recommendReason, item_Detail, desc_Detail,
        item_Limit, itemPolicyList, itemAttrList, itemDetailList,
        isLoaded, item_Spec_Price }
        = useSelector(state => state.itemDetail);

    const showService = () => {
        history.push(`/Item${queryString}#/Param`);
    }

    let _body;

    if (isLoaded && hash === '#/Param') {
        _body = <div>
            <div className="panel_service">服务</div>
            <div className="panel_content">
                {
                    itemPolicyList.map(item => <div key={item.item_Policy_Id}>
                        <div className="policy_wrapper_detail">
                            <div className="policy_title_detail">
                                {item.title}
                            </div>
                            <div className="policy_content_detail">
                                {item.content}
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="get_back" onClick={() => { history.goBack() }}>返回</div>
        </div>
    } else if (isLoaded && hash === '#/Service') {
        const specList = groupBy(itemDetailList, 'item_Spec');
        const imgSrc = itemImgList[0].img_Src;
        _body = <div className="dt_paramselect">
            <div className="info_con">
                <div className="content_left">
                    <img className="content_img" src={imgSrc}></img>
                </div>
                <div className="content_right">
                    <div className="price_choice_content">
                        <div className="price_content">
                            价格：¥{item_Spec_Price}
                        </div>
                        <div className="sku_content">
                            已选择：
                        </div>
                    </div>
                </div>
            </div>
            <div className="spec_con">
                {
                    specList.map(spec => (
                        <div key={spec.spec}>
                            <div className="spec_title">{spec.spec}</div>
                            <div className="spec_con_wrapper">
                                {
                                    spec.data.map(con => (
                                        <div key={con.item_Id} className="spec_tab">
                                            {con.item_value}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <div className="spec_title">数量</div>
                <div className="spec_con_wrapper">
                    <div className="select_content">
                        <i className="select_reduce">-</i>
                        <div className="textWrap">
                            <input type="tel" defaultValue="1" />
                        </div>
                        <i className="select_add">+</i>
                    </div>
                </div>
            </div>
        </div>;
    } else {
        _body = <div>
            <Carousel autoplay infinite style={{ height: '100vw' }}>
                {
                    itemImgList.map(item => (
                        <img key={item.item_id} src={item.img_Src} alt="load img failed" />
                    ))
                }
            </Carousel>
            <div className="item_detail_content">
                <div className="price_info"></div>
                <div className="item_title">{desc_Detail}</div>
                <div className="recommand_Desc">推荐理由</div>
                <div className="recommandBanner">
                    <ul>
                        {
                            recommendReason.split(',').map((item, index) => (
                                <li key={item}>
                                    <div className="index_content">{index + 1}</div>
                                    <div className="recommendReason">
                                        {item}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="item_spec_policy">
                <div className="item_attr">
                    <div className="item_spec_policy_content">
                        已选择：{item_Limit}
                    </div>
                </div>
                <div className="item_attr">
                    <div className="item_spec_policy_content">
                        限制：{item_Limit}
                    </div>
                </div>
                <div className="item_attr">
                    <div className="item_spec_policy_content">
                        配送：{item_Limit}
                    </div>
                </div>
                <div className="policy_wrapper" onClick={showService}>
                    <div className="item_policy_left">服务：</div>
                    <div className="item_policy_right">
                        {
                            itemPolicyList.map(item => (
                                <div className="policy_content" key={item.item_Policy_Id}>
                                    {item.title}
                                </div>
                            ))
                        }
                    </div>
                    <i className="item_icon">
                        <IconButton icon={'#icongengduo'}></IconButton>
                    </i>
                </div>
            </div>
            <div className="item_attr_wrapper">
                <div className="item_attr_title">
                    商品参数
                </div>
                {
                    itemAttrList.map(item => (
                        <div className="item_attr_content" key={item.item_Attr_Id}>
                            <div className="attr_name">{item.attr_Name}</div>
                            <div className="attr_desc">{item.attr_Value}</div>
                        </div>
                    ))
                }
            </div>
            <div dangerouslySetInnerHTML={{ __html: item_Detail }} className="item_detail_wrapper"></div>
        </div>;
    }

    useEffect(() => {
        dispatch({ type: ActionList.Load_Item_Detail_Request, params: queryString });
    }, [queryString]);

    return (
        <div className="item_detail_container">
            <TopBar></TopBar>
            <div className="item_detail_body">
                {_body}
            </div>
        </div>
    )
}

export default ItemDetailPage