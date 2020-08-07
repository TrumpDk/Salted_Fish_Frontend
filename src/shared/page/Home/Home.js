import React, { Fragment } from 'react'
import './Home.scss'
import { bindActionCreators } from 'redux'
import * as HomeAction from '../../../action/Home'
import { connect } from 'react-redux'
import NavBar from '../../component/NavBar/NavBar'
import Observer from '../../component/ComponentObserveble/ComponentObserveble'
import fish from '../../../assets/img/salted_fish.png'
import { Carousel } from 'antd-mobile'
import { Link } from 'react-router-dom'
import * as checkLogin from '../../../action/checkLogin'
import SearchBar from '../../component/SearchBar/SearchBar'
import BarContent from '../../component/SkeletonContent/BarContent/BarContent'
import ImgContent from '../../component/SkeletonContent/baseContent/ImgContent'

const navBarList = [
    { name: '运动', icon: '#iconyundong', key: 1 },
    { name: '游戏', icon: '#iconyouxi', key: 2 },
    { name: '家具', icon: '#iconjiaju', key: 3 },
    { name: '服装', icon: '#iconyifu', key: 4 },
    { name: '更多', icon: '#icongengduo', key: 5 }
]

const gallery = [
    { id: '1', img_url: 'https://yanxuan.nosdn.127.net/347d793f55ccd9ef40eb295d464181b1.jpg?type=webp&imageView&quality=100&thumbnail=1500x0' },
    { id: '2', img_url: 'https://yanxuan.nosdn.127.net/2adf12a973021957d8b7a94e8b6a63cf.jpg?type=webp&imageView&quality=100&thumbnail=1500x0' },
    { id: '3', img_url: 'https://yanxuan.nosdn.127.net/f3f7fbac5bd0ae2212d111d7c7cafc18.jpg?type=webp&imageView&quality=100&thumbnail=1500x0' },
    { id: '4', img_url: 'https://yanxuan.nosdn.127.net/1cc326d2dc3a62d78e00c6b1a4689d54.jpg?type=webp&imageView&quality=100&thumbnail=1500x0' }
]

class Home extends React.Component {

    componentDidMount() {
        this.props.checkLogin.checkLogin();
        this.fetchItemData(0);
    }

    fetchItemData() {
        this.props.HomeAction.fetchCommodityData();
    }

    render() {
        const { dataArray, isLoaded } = this.props.commodityList;
        const { isLogin } = this.props.loginStatus;
        return (
            <Fragment>
                <div className="home_search_bar_content">
                    <div className="bar_img_content">
                        <img src={fish}></img>
                    </div>
                    <SearchBar />
                    {
                        isLogin ? null : <Link to="/LogIn">
                            <div className="login_btn">登录</div>
                        </Link>
                    }
                </div>
                <div className="Header_Wrapper">
                    {
                        isLoaded ? <NavBar barItems={navBarList} iconContentStyle={'home_bar'} iconOjbect={'icon_ojbect'} iconSpanStyle={'home_bar_span'} /> : <BarContent />
                    }
                </div>
                {
                    isLoaded ? <Carousel autoplay infinite className="Home_Carousel">
                        {gallery.map(item => (
                            <div className="goodsBannerItem" key={item.id}>
                                <img src={item.img_url} alt="load img failed" />
                            </div>
                        ))}
                    </Carousel> : <ImgContent propStyle={{ height: '3.94667rem' }} />
                }
                <div className="hot_goods">
                    <div className="title_content">
                        <span className="title_container">猜你喜欢</span>
                    </div>
                    {
                        isLoaded ?
                            <div className="item_content">
                                <Observer imgList={dataArray} />
                            </div> :
                            <div>
                                <div className="pre_content_wrapper">
                                    <ImgContent propStyle={{ width: '100%', height: '4.8rem' }} />

                                    <div style={{ marginTop: '.5rem' }}>
                                        <ImgContent propStyle={{ width: '100%', height: '.8rem' }} />
                                    </div>
                                </div>
                                <div className="pre_content_wrapper">
                                    <ImgContent propStyle={{ width: '100%', height: '4.8rem' }} />

                                    <div style={{ marginTop: '.5rem' }}>
                                        <ImgContent propStyle={{ width: '100%', height: '.8rem' }} />
                                    </div>
                                </div>
                                <div className="pre_content_wrapper">
                                    <ImgContent propStyle={{ width: '100%', height: '4.8rem' }} />

                                    <div style={{ marginTop: '.5rem' }}>
                                        <ImgContent propStyle={{ width: '100%', height: '.8rem' }} />
                                    </div>
                                </div>
                                <div className="pre_content_wrapper">
                                    <ImgContent propStyle={{ width: '100%', height: '4.8rem' }} />

                                    <div style={{ marginTop: '.5rem' }}>
                                        <ImgContent propStyle={{ width: '100%', height: '.8rem' }} />
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = (state) => ({
    commodityList: state.homeData,
    loginStatus: state.checkLogin,
})

const mapDispatchToProps = (dispatch) => ({
    HomeAction: bindActionCreators(HomeAction, dispatch),
    checkLogin: bindActionCreators(checkLogin, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)