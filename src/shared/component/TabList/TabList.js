import React from 'react'
import { withRouter } from 'react-router-dom'
import routers from '../../../router/routers'
import './TabList.scss'
import { TabBar } from 'antd-mobile'
import IconButton from '../IconButton/IconButton'
import { Toast } from 'antd-mobile';

const TabList = (props) => {

    const { history: { location: { pathname } } } = props;
    let hidden = true;
    routers.forEach(item => {
        if (item.path == pathname) {
            hidden = item.hidden;
        }
    })

    return (
        <div className="footer_content">
            <TabBar
                unselectedTintColor="#666"
                tintColor="rgb(216, 30, 6)"
                barTintColor="white"
                hidden={hidden}
            >
                {
                    routers.filter(item => item.icon).map(item => (
                        <TabBar.Item
                            title={item.title}
                            key={item.key}
                            icon={<div style={{
                                width: '.53333rem',
                                height: '.53333rem'
                            }}
                            >
                                <IconButton icon={item.icon}></IconButton>
                            </div>
                            }
                            selectedIcon={<div style={{
                                width: '.53333rem',
                                height: '.53333rem'
                            }}
                            >
                                <IconButton icon={item.icon_selected}></IconButton>
                            </div>
                            }
                            selected={pathname === item.path}
                            onPress={() => {
                                if (item.path === "/Cart") {
                                    Toast.fail("此功能尚待解锁", 1);
                                    return;
                                }
                                props.history.push(item.path);
                            }}
                            data-seed="logId"
                        >
                        </TabBar.Item>
                    ))
                }
            </TabBar>
        </div>
    )
}

export default withRouter(TabList);