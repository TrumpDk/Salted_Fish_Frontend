import React from 'react'
import { withRouter } from 'react-router-dom'
import routers from '../../../router/routers'
import './TabList.scss'
import { TabBar } from 'antd-mobile'

const TabList = (props) => {

    const { history: { location: { pathname } } } = props;
    const showTab = true;
    routers.forEach(item => {
        if (item.showTab == pathname) {
            showTab = item.showTab;
        }
    })

    return (
        showTab ?
            <div className="footer_content border">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={false}>
                    {
                        routers.map(item => (
                            <TabBar.Item
                                title={item.title}
                                key={item.key}
                                icon={<div style={{
                                    width: '.53333rem',
                                    height: '.53333rem'
                                }}
                                >
                                    <svg aria-hidden="true" className='svg_content'>
                                        <use xlinkHref="#iconcategory"></use>
                                    </svg>
                                </div>
                                }
                                selectedIcon={<div style={{
                                    width: '.53333rem',
                                    height: '.53333rem'
                                }}
                                >
                                    <svg aria-hidden="true" className='svg_content'>
                                        <use xlinkHref="#iconcategory"></use>
                                    </svg>
                                </div>
                                }
                                selected={console.log('selected me')}
                                badge={1}
                                onPress={() => {
                                    console.log('press me')
                                }}
                                data-seed="logId"
                            >
                            </TabBar.Item>
                        ))
                    }
                </TabBar>
            </div> : null
    )
}

export default withRouter(TabList);