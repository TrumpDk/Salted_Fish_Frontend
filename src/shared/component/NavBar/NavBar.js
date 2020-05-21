import React from 'react'
import './NavBar.scss'
import IconButton from '../IconButton/IconButton'

const NavBar = ({ barItems, iconContentStyle, iconSpanStyle }) => {
    return (
        <div className="bar_container">
            {
                barItems.map(item =>
                    <a key={item.key} className="icon_container">
                        <i className={iconContentStyle}>
                            <IconButton icon={item.icon} />
                        </i>
                        <div className={iconSpanStyle}>{item.name}</div>
                    </a>
                )
            }
        </div>
    );
}

export default NavBar;