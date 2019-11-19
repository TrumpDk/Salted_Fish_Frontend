import React, { Fragment } from 'react'
import './Home.css'
import SearchBarCom from '../../component/SearchBar/SearchBar'
import NavBar from '../../component/NavBar/NavBar'
import CategoriesLists from '../../component/CategoriesList/CategoriesLists'
import httpService from '../../../http/httpList'

class Home extends React.Component {

    componentDidMount() {
        this.logIn();
    }

    async logIn() {
        let obj = {};
        try {
            obj = await httpService.findUserByName('userName=ssss');
        } catch (err) {
            console.log(err);
        }
        console.log(obj);
    }
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

export default Home;