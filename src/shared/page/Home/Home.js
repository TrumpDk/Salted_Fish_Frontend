import React, { Fragment } from 'react'
import TabList from '../../component/TabList/TabList'
import './Home.css'
import SearchBarCom from '../../component/SearchBar/SearchBar'

class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <SearchBarCom></SearchBarCom>
                </div>
            </Fragment>
        );
    }
}

export default Home;