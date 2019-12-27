import React, { Fragment } from 'react'
import './Home.css'
import SearchBarCom from '../../component/SearchBar/SearchBar'
import NavBar from '../../component/NavBar/NavBar'
import CategoriesLists from '../../component/CategoriesList/CategoriesLists'
import httpService from '../../../http/httpList'
import { bindActionCreators } from 'redux'
import * as homeAction from '../../../redux/actions/Home'
import { connect } from 'react-redux'

class Home extends React.Component {

    componentWillMount() {
        this.props.actions.fetchCommodityData({startIndex: 1, pageSize: 5});
        console.log('fetch data for homepage');
    }

    // async logIn() {
    //     let obj = {};
    //     try {
    //         obj = await httpService.findUserByName('userName=ssss');
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     console.log(obj);
    // }
    render() {
        return (
            <Fragment>
                <SearchBarCom></SearchBarCom>
                <div className="Header_Wrapper">
                    <NavBar></NavBar>
                </div>
                <CategoriesLists></CategoriesLists>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    commodityList: state.fetchHomeData
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(homeAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);