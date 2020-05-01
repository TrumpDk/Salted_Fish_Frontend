import React from 'react'
import App from '../shared/page/App'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const Server = (url, store) => {

    return (
        <Provider store={store}>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </Provider>
    )
}

export default Server