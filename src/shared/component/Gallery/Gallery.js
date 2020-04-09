import React from 'react'
import './Gallery.scss'
const Gallery = ({ isVisible, item: { img_Src, desc_Detail, price } }) => (
    <div className="img_content">
        {isVisible ? (
            <img src={img_Src} width="100%" height="auto" />
        ) : (
                <div className="placeholder"></div>
            )}
        <div className="detail_content">
            <div className="detail_wrapper">{desc_Detail}</div>
            <div className="price_wrapper">{price}</div>
        </div>
    </div>
);

export default Gallery;