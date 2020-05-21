import React from 'React'

const IconButton = ({ icon }) => {
    return (
        <svg aria-hidden="true" className="icon svg_content">
            <use xlinkHref={icon}></use>
        </svg>
    );
}

export default IconButton;