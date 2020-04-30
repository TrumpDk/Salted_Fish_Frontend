import React from 'react'
import { Switch } from 'react-router-dom'
import routers from '../../router/routers'
import 'antd-mobile/dist/antd-mobile.css';
import TabList from '../component/TabList/TabList'
import RenderRountes from '../utils/renderRouter'
import './App.scss'
import { bindActionCreators } from 'redux'
import * as checkLogInAction from '../../action/actionsList'
import { connect } from 'react-redux'

const authed = false;
const authPath = '/LogIn';

const tabLists = [
    { icon: '', name: '闲鱼', url: '/fish', },
    { icon: '', name: '鱼塘', url: '/pool' },
    { icon: '', name: '消息', url: '/message' },
    { icon: '', name: '我的', url: '/mine' }
]

class App extends React.Component {
    render() {
        return (
            <div className="App_Root">
                <div className="App_Content">
                    <Switch>
                        <RenderRountes routers={{ routers: routers, authed: authed, authPath: authPath }}></RenderRountes>
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
    isLogIn: state.logInReducer
})
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(checkLogInAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);