import React from 'react'
import ReactDOM from 'react-dom'
import App from '../shared/page/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { hydrate } from 'react-dom'
import storage from '../shared/utils/storage'

const Entry = () => {
    return (
        <Provider store={storage}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(<Entry />, document.getElementById('app'))