import React, { Fragment } from 'react'
import './Home.scss'
import { bindActionCreators } from 'redux'
import * as action from '../../../action/Home'
import { connect } from 'react-redux'
import SearchBarCom from '../../component/SearchBar/SearchBar'
import NavBar from '../../component/NavBar/NavBar'
import Observer from '../../component/ComponentObserveble/ComponentObserveble'
import Gallery from '../../component/Gallery/Gallery'

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.commodityList.dataArray.length == 0) {
            this.fetchItemData(1);
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
                    <NavBar></NavBar>
                </div>
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