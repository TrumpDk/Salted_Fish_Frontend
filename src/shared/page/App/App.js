import React from 'react'
import { ActivityIndicator } from 'antd-mobile'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from '../Home/Home';
import TabList from '../../component/TabList/TabList';
import './App.scss'

class App extends React.Component {
    render() {
        return (
            <div className="App_Root">
                <div className="App_Content">
                    <ActivityIndicator toast text="Loading..." animating={false} />
                    <Route exact path="/" render={() => (
                        true ? (
                            <Redirect to="/Home" />
                        ) : (
                                <LogIn></LogIn>
                            )
                    )}></Route>
                    <Switch>
                        <Route path="/Home" component={Home}></Route>
                        <Route path="/Pond" component={Home}></Route>
                        <Route path="/Message"></Route>
                        <Route path="/MyProfile"></Route>
                    </Switch>
                </div>
                <div className="App_Footer">
                    <TabList></TabList>
                </div>
            </div>
        );
    }
}

export default App;