import React from 'react'
import { Switch } from 'react-router-dom'
import routers from '../../router/routers'
import 'antd-mobile/dist/antd-mobile.css'
import TabList from '../component/TabList/TabList'
import './App.scss'
import { connect } from 'react-redux'
import RenderRoutes from '../utils/renderRouter'

const tabLists = [
    { icon: '', name: '闲鱼', url: '/fish', },
    { icon: '', name: '鱼塘', url: '/pool' },
    { icon: '', name: '消息', url: '/message' },
    { icon: '', name: '我的', url: '/mine' }
]

class App extends React.Component {

    render() {
        const { isLogin } = this.props.loginStatus;
        return (
            <div className="App_Root">
                <div className="App_Content">
                    <Switch>
                        {
                            RenderRoutes({ routers: routers, authed: isLogin })
                        }
                    </Switch>
                </div>
                <div className="App_Footer">
                    <TabList tabLists={tabLists}></TabList>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loginStatus: state.checkLogin
})

export default connect(mapStateToProps, null)(App);