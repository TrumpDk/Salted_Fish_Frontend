import React from 'react';

const handler = () => {
    console.log('fire haha');
};

const defaultImgSrc = 'xxxx.png';
if (typeof IntersectionObserver !== 'undefined') {
    let observer = new IntersectionObserver(handler);
    observer.observe(ImgContainer);
}

const ImgContainer = () => {
    return (
        <img src={defaultImgSrc} style={{ with: '200px', height: '200px' }} />
    );
}

export default ImgContainer;