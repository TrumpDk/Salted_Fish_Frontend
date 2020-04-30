import React from 'react'
import './NavBar.scss'

const NavBar = ({ barItems, iconContentStyle, iconSpanStyle }) => {
    return (
        <div className="bar_container">
            {
                barItems.map(item =>
                    <a key={item.key} className="icon_container">
                        <i className={iconContentStyle}>
                            <svg aria-hidden="true" className='svg_content'>
                                <use xlinkHref={item.icon}></use>
                            </svg>
                        </i>
                        <div className={iconSpanStyle}>{item.name}</div>
                    </a>
                )
            }
        </div>
    );
}

export default NavBar;