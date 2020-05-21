import React from "react";
import { Link } from 'react-router-dom'
import './NotFound.scss'

const NotFound = () => (
    <div className="Not_Found_Content">
        <div className="Four_O_Four">
            <span>404</span>
        </div>
        <Link to="/">
            <div className="back_to_home">返回首页</div>
        </Link>
    </div>
);

export default NotFound;