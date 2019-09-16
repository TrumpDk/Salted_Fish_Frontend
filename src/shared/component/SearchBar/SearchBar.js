import React from 'react'
import fish from '../../../assets/public/img/salted_fish.png'
import { SearchBar } from 'antd-mobile'
import './SearchBar.scss'

const SearchBarCom = () => {
    return (
        <div className="search_bar_content">
            <div className="bar_img_content">
                <img src={fish}></img>
            </div>
            <div className="bar_search_content">
                <SearchBar
                    placeholder="Search"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    showCancelButton
                    onChange={() => {return false}}
                />
            </div>
        </div>
    );
}

export default SearchBarCom;
