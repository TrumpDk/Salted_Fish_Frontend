import React, { Fragment } from 'react'
import './NavBar.scss'
import IconButton from '../IconButton/IconButton'

const navBarItems = [
    { name: '游戏', icon: '#iconcategory', key: 1 },
    { name: '游戏', icon: '#iconcategory', key: 2 },
    { name: '游戏', icon: '#iconcategory', key: 3 },
    { name: '游戏', icon: '#iconcategory', key: 4 },
    { name: '游戏', icon: '#iconcategory', key: 5 },
    { name: '游戏', icon: '#iconcategory', key: 6 },
    { name: '游戏', icon: '#iconcategory', key: 7 },
    { name: '游戏', icon: '#iconcategory', key: 8 },
    { name: '游戏', icon: '#iconcategory', key: 9 },
    { name: '游戏', icon: '#iconcategory', key: 10 }
]

const NavBar = () => {
    return (
        <div className="bar_container">
            {
                navBarItems.map(item =>
                    <div key={item.key} className="icon_container">
                        <div className="icon_content">
                            <IconButton iconObject={{icon: item.icon, className: 'icon icon_ojbect'}}></IconButton>
                        </div>
                        <div className="icon_span">{item.name}</div>
                    </div>
                )
            }
        </div>
    );
}

export default NavBar;