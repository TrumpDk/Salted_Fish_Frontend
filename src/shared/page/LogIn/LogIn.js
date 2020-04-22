import React from 'react';
import headerImg from '../../../assets/img/sign_in_tile.jpg'
import saltedFish from '../../../assets/img/salted_fish.png'
import './LogIn.scss'
import { Button } from 'antd-mobile'
import httpService from '../../../http/httpLists'

class LogIn extends React.Component {

    /**
     * submit user information
     */
    async signInSubmit() {
        const userName = this.refs.userName.value;
        const password = this.refs.password.value;
        const { code, data, msg } = await httpService.logIn({ userName: userName, password: password });
    }

    render() {
        return (
            <div className="sign_in">
                <div>
                    <img src={headerImg} className="sign_in_header_img" />
                </div>
                <div className="sign_in_content">
                    <div className="fish_img_container">
                        <img src={saltedFish} className="fish_img" />
                    </div>

                    <div className="sign_in_main">
                        <div className="input_Wrap">
                            <input type="text" ref="userName" placeholder="please input your account" />
                        </div>
                        <div className="input_Wrap">
                            <input type="password" ref="password" placeholder="please input your password" />
                        </div>
                    </div>
                    <div className="login_Btn">
                        <Button type="primary" onClick={this.signInSubmit.bind(this)}>sign in</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn;