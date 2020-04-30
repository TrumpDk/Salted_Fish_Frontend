import React, { Fragment } from 'react'
import './Home.scss'
import { bindActionCreators } from 'redux'
import * as action from '../../../action/Home'
import { connect } from 'react-redux'
import SearchBarCom from '../../component/SearchBar/SearchBar'
import NavBar from '../../component/NavBar/NavBar'
import Observer from '../../component/ComponentObserveble/ComponentObserveble'
import Gallery from '../../component/Gallery/Gallery'
import { Carousel } from 'antd-mobile'

const navBarList = [
    { name: '游戏', icon: '#iconcategory', key: 1 },
    { name: '游戏', icon: '#iconcategory', key: 2 },
    { name: '游戏', icon: '#iconcategory', key: 3 },
    { name: '游戏', icon: '#iconcategory', key: 4 },
    { name: '游戏', icon: '#iconcategory', key: 5 }
]

const gallery = [
    { id: '1', img_url: 'https://yanxuan.nosdn.127.net/347d793f55ccd9ef40eb295d464181b1.jpg?type=webp&imageView&quality=100&thumbnail=1500x0' },
    { id: '2', img_url: 'https://yanxuan.nosdn.127.net/2adf12a973021957d8b7a94e8b6a63cf.jpg?type=webp&imageView&quality=100&thumbnail=1500x0' },
    { id: '3', img_url: 'https://yanxuan.nosdn.127.net/f3f7fbac5bd0ae2212d111d7c7cafc18.jpg?type=webp&imageView&quality=100&thumbnail=1500x0' },
    { id: '4', img_url: 'https://yanxuan.nosdn.127.net/1cc326d2dc3a62d78e00c6b1a4689d54.jpg?type=webp&imageView&quality=100&thumbnail=1500x0' }
]

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.commodityList.dataArray.length == 0) {
            this.fetchItemData(0);
        }
    }

    fetchItemData(index, pageSize = 6) {
        this.props.action.fetchCommodityData({ startIndex: index, pageSize: pageSize });
    }

    render() {
        const { dataArray } = this.props.commodityList;
        return (
            <Fragment>
                <SearchBarCom></SearchBarCom>
                <div className="Header_Wrapper">
                    <NavBar barItems={navBarList} iconContentStyle={'home_bar'} iconOjbect={'icon_ojbect'} iconSpanStyle={'home_bar_span'} />
                </div>
                <Carousel autoplay infinite>
                    {gallery.map(item => (
                        <div className="goodsBannerItem" key={item.id}>
                            <img src={item.img_url} alt="load img failed" />
                        </div>
                    ))}
                </Carousel>
                <div className="hot_goods">
                    <div className="title_content">
                        <span className="title_container">猜你喜欢</span>
                    </div>
                    <div className="item_content">
                        {dataArray.map((item, index) =>
                            <Observer key={item.items_Id} info={{ item, length: dataArray.length, index, nextPage: this.props.commodityList.index }} fetchNextPageData={this.props.action.fetchCommodityData}>
                                {(isVisible, item, index) => <Gallery isVisible={isVisible} item={item} index={index} />}
                            </Observer>
                        )}
                    </div>
                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = (state) => ({
    commodityList: state.homeData
})

const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(action, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)