import App from './shared/page/App/App'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css'

const jsx = (
    <Router>
        <App />
    </Router>
)
ReactDOM.hydrate(jsx, document.getElementById('app'));