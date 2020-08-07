import React from 'react'
import './TopBar.scss'
import IconButton from '../IconButton/IconButton'

const TopBar = () => (
    <div className="topbar_wrapper">
        <a className="bar_icon_wrapper"><IconButton icon={'#iconshouye-xianxing'} /></a>
        <a className="title_content">
            <span style={{ width: "100%" }}>咸鱼乱选</span>
        </a>
        <a className="bar_icon_wrapper margin_right"><IconButton icon={'#iconsearch'} /></a>
        <a className="bar_icon_wrapper"><IconButton icon={'#icongouwuche-xianxing'} /></a>
    </div>
)

export default TopBar