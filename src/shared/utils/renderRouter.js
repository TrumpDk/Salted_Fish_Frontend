import React from 'react'
import { Route, Redirect } from 'react-router-dom'

/**
 * refered to https://segmentfault.com/a/1190000015282620?utm_source=channel-hottest
 * @param {*} routes 
 * @param {*} authed 
 * @param {*} authPath 
 * @param {*} extraProps 
 * @param {*} switchProps 
 */
const RenderRoutes = ({ routers, authed }) => {
    return routers.map((route, i) => {
        return <Route
            key={route.key || i}
            path={route.path}
            exact
            render={(props) => {
                if (!route.requiresAuth || authed) {
                    return <route.component {...props} />
                }
                return <Redirect to={{ pathname: '/LogIn', state: { from: props.location.pathname } }} />
            }}
        />
    })
}

export default RenderRoutes