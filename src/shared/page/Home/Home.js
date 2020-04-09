import React, { Fragment } from 'react'
import './Home.css'
import SearchBarCom from '../../component/SearchBar/SearchBar'
import NavBar from '../../component/NavBar/NavBar'
import { bindActionCreators } from 'redux'
import * as homeAction from '../../../redux/actions/Home'
import { connect } from 'react-redux'
import Observer from '../../component/ComponentObserveble/ComponentObserveble'
import Gallery from '../../component/Gallery/Gallery'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.fetchItemData(1);
    }

    fetchItemData(index, pageSize = 6) {
        this.props.actions.fetchCommodityData({ startIndex: index, pageSize: pageSize });
    }

    render() {
        const { dataArray } = this.props.commodityList;
        console.log('you have me at once');
        return (
            <Fragment>
                <SearchBarCom></SearchBarCom>
                <div className="Header_Wrapper">
                    <NavBar></NavBar>
                </div>
                <div className="title_content">
                    <span className="title_container">猜你喜欢</span>
                </div>
                <div className="item_content">
                    {dataArray.map((item, index) =>
                        <Observer key={item.items_Id} info={{ item, length: dataArray.length, index, nextPage: this.props.commodityList.index }} fetchNextPageData={this.props.actions.fetchCommodityData}>
                            {(isVisible, item, index) => <Gallery isVisible={isVisible} item={item} index={index} />}
                        </Observer>
                    )}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    commodityList: state.homeData
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(homeAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);