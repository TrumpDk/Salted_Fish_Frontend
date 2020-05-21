import React from "react";
import IconButton from "../IconButton/IconButton";
import './SeachBar.scss'

const SearchBar = () => (
    <div className="search_content">
        <span className="icon_search">
            <IconButton icon={"#iconsearch"} />
        </span>
        <span className="searchbarholder">请输入想要搜索的商品</span>
    </div>
)

export default SearchBar;