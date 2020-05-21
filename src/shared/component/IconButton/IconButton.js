import React from 'react'

const IconButton = ({ icon }) => {
    return (
        <svg aria-hidden="true" className="icon svg_content">
            <use xlinkHref={icon}></use>
        </svg>
    );
}

export default IconButton;