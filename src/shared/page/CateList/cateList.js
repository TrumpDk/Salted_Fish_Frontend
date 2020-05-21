import React from 'react'
import './cateList.scss'
import SearchBar from '../../component/SearchBar/SearchBar'

const cateListItems = [
    { key: 1, cate: '推荐专区' },
    { key: 2, cate: '爆品专区' },
    { key: 3, cate: '新品专区' },
    { key: 4, cate: '居家专区' },
    { key: 5, cate: '母婴专区' },
    { key: 6, cate: '服装专区' },
    { key: 7, cate: '个护清洁' },
    { key: 8, cate: '数码专区' },
    { key: 9, cate: '家电专区' },
    { key: 10, cate: '运动专区' },
    { key: 11, cate: '家电专区' },
    { key: 12, cate: '美食专区' }
];

const subCateList = [
    { key: 1, desc: '员工精选', img: 'https://yanxuan.nosdn.127.net/f68c16727409880d6b7717873c4f2597.png?quality=75&type=webp&imageView&thumbnail=144x144' },
    { key: 2, desc: '新品速递', img: 'https://yanxuan.nosdn.127.net/5c3ec484a40788f985b3be78e54dacbf.png?quality=75&type=webp&imageView&thumbnail=144x144' },
    { key: 3, desc: '懒人必备', img: 'https://yanxuan.nosdn.127.net/076daf74799808a02bed57904a4e2620.png?quality=75&type=webp&imageView&thumbnail=144x144' },
    { key: 4, desc: '网红精品', img: 'https://yanxuan.nosdn.127.net/076daf74799808a02bed57904a4e2620.png?quality=75&type=webp&imageView&thumbnail=144x144' },
    { key: 5, desc: '新品衣物', img: 'https://yanxuan.nosdn.127.net/076daf74799808a02bed57904a4e2620.png?quality=75&type=webp&imageView&thumbnail=144x144' },
    { key: 6, desc: '时尚单品', img: 'https://yanxuan.nosdn.127.net/076daf74799808a02bed57904a4e2620.png?quality=75&type=webp&imageView&thumbnail=144x144' },
    { key: 7, desc: '超值特卖', img: 'https://yanxuan.nosdn.127.net/076daf74799808a02bed57904a4e2620.png?quality=75&type=webp&imageView&thumbnail=144x144' },
    { key: 8, desc: '懒人家电', img: 'https://yanxuan.nosdn.127.net/076daf74799808a02bed57904a4e2620.png?quality=75&type=webp&imageView&thumbnail=144x144' },
    { key: 9, desc: '达人首推', img: 'https://yanxuan.nosdn.127.net/076daf74799808a02bed57904a4e2620.png?quality=75&type=webp&imageView&thumbnail=144x144' },
]

const CateList = (props) => {
    return (
        <div className="catelist_wrapper">
            <div className="cate_search_bar_content">
                <SearchBar />
            </div>
            <div className="cate_container">
                <div className="cate_detail_list border">
                    <ul className="cate_items_container">
                        {
                            cateListItems.map((item, index) => (
                                <li className={index === 0 ? "cate_item cate_active" : "cate_item margin_cate"}>
                                    <a>{item.cate}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="cate_detail_item">
                    <div className="subcate_list">
                        <div className="sub_banner">
                            <img src="https://yanxuan.nosdn.127.net/02d2ed5612455270053a26e7d39de8be.jpg?quality=75&type=webp&imageView&thumbnail=0x196" className="banner_img" alt="load img faled"></img>
                        </div>
                        <div className="sub_cate_list">
                            <ul>
                                {
                                    subCateList.map(item => (
                                        <li className="sub_cate_item">
                                            <div className="cate_img_container">
                                                <img src={item.img} className="cate_img" />
                                            </div>
                                            <div className="cate_item_title">
                                                {item.desc}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CateList