import React from 'react'
import './Gallery.scss'
const Gallery = ({ isVisible, item: { img_Src, desc_Detail, price } }) => (
    <div className="border">
        <div className="img_content">
            {isVisible ? (
                <img src={img_Src} width="100%" height="auto" />
            ) : (
                    <div className="placeholder"></div>
                )}
        </div>
        <div className="detail_content">
            <div>
                <span className="detail_wrapper">{desc_Detail}</span>
            </div>
            <div className="price_wrapper">{`￥${price}`}</div>
        </div>
    </div>
);

export default Gallery;