import React from 'react'
import { ActivityIndicator } from 'antd-mobile'
import { Switch } from 'react-router-dom'
import TabList from '../../component/TabList/TabList'
import './App.scss'
import RenderRountes from '../../utils/renderRouter'
import routers from '../../router/RouterList'
import { bindActionCreators } from 'redux'
import * as checkLogInAction from '../../../redux/actions/checkLogIn'
import { connect } from 'react-redux'
import actionList from '../../../redux/actions/actionsList'
// import httpService from '../../../http/httpList'

const authed = false;
const authPath = '/LogIn';

const tabLists = [
    {icon: '', name: '闲鱼', url: '/fish',},
    {icon: '', name: '鱼塘', url: '/pool'},
    {icon: '', name: '消息', url: '/message'},
    {icon: '', name: '我的', url: '/mine'}
]

class App extends React.Component {

    // only componentWillMount could trigger saga in server side rendering,but this hook will be removed in future
    componentWillMount() {
        this.props.actions.startCheckLogIn();
    }

    render() {
        return (
            <div className="App_Root">
                <div className="App_Content">
                    <ActivityIndicator toast text="Loading..." animating={false} />
                    <Switch>
                        <RenderRountes routers={{ routers: routers, authed: authed, authPath: authPath }}></RenderRountes>
                    </Switch>
                </div>
                <div className="App_Footer">
                    <TabList tabLists={tabLists}></TabList>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLogIn: state.logInReducer
})
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(checkLogInAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);