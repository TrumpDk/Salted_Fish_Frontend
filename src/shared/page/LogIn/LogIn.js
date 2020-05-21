import React from 'react';
import headerImg from '../../../assets/img/sign_in_tile.jpg'
import saltedFish from '../../../assets/img/salted_fish.png'
import './LogIn.scss'
import { Button } from 'antd-mobile'
import { List, InputItem } from 'antd-mobile'
import httpService from '../../../http/httpLists'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as logIn from '../../../action/checkLogin'

class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "登录",
            msg: "",
            code: ""
        }
    }

    async login() {
        this.setState({
            title: "登录中"
        })
        const { code, msg, data } = await httpService.logIn({ userName: this.refs.userName.state.value, password: this.refs.password.state.value });
        if (code === '200') {
            localStorage.setItem('userName', data.userName);
            localStorage.setItem('userFavicon', data.avatar);
            this.props.logAction.userDoLogin();
            if (this.props.location.state) {
                this.props.history.push(this.props.location.state.from);
            } else {
                this.props.history.push('/');
            }
        } else {
            this.setState({
                title: '登录',
                code: code,
                msg: msg
            })
        }
    }

    render() {
        return (
            <>
                <div>
                    <img src={headerImg} className="sign_in_header_img" />
                </div>
                <div className="sign_in_content">
                    <div className="fish_img_container">
                        <img src={saltedFish} className="fish_img" />
                    </div>
                    <div className="login_container">
                        <List className="input_content">
                            <InputItem placeholder="name" ref="userName"></InputItem>
                        </List>
                        <List className="input_content">
                            <InputItem placeholder="password" type="password" ref="password"></InputItem>
                        </List>
                        {
                            this.state.code === '201' ? <div className="msg_content">{this.state.msg}</div> : null
                        }
                    </div>
                    <Button className="input_content" type="warning" onClick={this.login.bind(this)}>{this.state.title}</Button>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    logAction: bindActionCreators(logIn, dispatch)
})

export default connect(null, mapDispatchToProps)(LogIn);