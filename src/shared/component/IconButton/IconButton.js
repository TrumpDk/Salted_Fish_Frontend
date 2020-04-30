import React from 'React'

const IconButton = ({ icon }) => {
    return (
        <svg aria-hidden="true">
            <use xlinkHref={icon}></use>
        </svg>
    );
}

export default IconButton;