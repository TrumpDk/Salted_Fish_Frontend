import React from 'react'
import { withRouter } from 'react-router-dom'
import routers from '../../../router/routers'
import './TabList.scss'

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
            <div className="footer_content"></div> : null
    )
}

export default withRouter(TabList);
// export default TabList;