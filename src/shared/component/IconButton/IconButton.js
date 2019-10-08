import React from 'React'

const IconButton = ({ iconObject: { icon, className } }) => {
    return (
        <svg className={className} aria-hidden="true">
            <use xlinkHref={icon}></use>
        </svg>
    );
}

export default IconButton;