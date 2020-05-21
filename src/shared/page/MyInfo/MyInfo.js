import React from 'react'
import './MyInfo.scss'
import IconButton from '../../component/IconButton/IconButton'
import { connect } from 'react-redux'
import * as userAction from '../../../action/checkLogin'
import { bindActionCreators } from 'redux'
import { Modal } from 'antd-mobile';
import httpService from '../../../http/httpLists'

const myMenuItem = [
    { icon: '#icondingdan', title: '我的订单' },
    { icon: '#iconyiqipindan', title: '一起拼单' },
    { icon: '#iconshouhou', title: '售后服务' },
    { icon: '#iconfanli', title: '返利' },
    { icon: '#iconhuiyuantequan', title: '会员特权' },
    { icon: '#iconhuiyuanjifen', title: '会员积分' },
    { icon: '#iconhuiyuanjulebu', title: '会员俱乐部' },
    { icon: '#icondizhiguanli', title: '地址管理' },
    { icon: '#iconanquan', title: '账号安全' },
    { icon: '#iconfankui', title: '反馈' },
    { icon: '#iconservice', title: '客服' },
]

class MyInfo extends React.Component {

    componentDidMount() {
        this.props.userAction.checkLogin();
    }

    async signOut() {
        const result = await httpService.signout();
        if (result) {
            this.props.history.push('/');
            this.props.userAcion.userDoLogout();
        }
    }
    userSignOut() {
        this.signOut();
    }
    render() {
        return (
            <>
                <div className="user_info_content">
                    <img className="user_img_content" src={localStorage.getItem('userFavicon')}></img>
                    <div className="info_content">
                        <div className="userName">
                            <span>
                                {localStorage.getItem('userName')}
                            </span>
                        </div>
                        <div className="userDesc">
                            <span>普通用户</span>
                        </div>
                    </div>
                </div>
                <div className="my_menu">
                    <ul className="my_list">
                        {
                            myMenuItem.map((item, index) => (
                                <li className={(index + 1) > (myMenuItem.length - myMenuItem.length % 3) ? "my_list_item border no_boder_bottom" : "my_list_item border"} key={item.icon}>
                                    <i className="menu_icon">
                                        <IconButton icon={item.icon}></IconButton>
                                    </i>
                                    <span className="menu_title">{item.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="sign_out" onClick={() => {
                    Modal.alert('', 'Are you sure to sign out?', [
                        { text: '手滑了', onPress: () => console.log('cancel') },
                        { text: '确定', onPress: () => this.userSignOut() },
                    ])
                }}>
                    <span>退出登录</span>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    userAction: bindActionCreators(userAction, dispatch)
})

export default connect(null, mapDispatchToProps)(MyInfo);