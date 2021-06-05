import React, { useState } from 'react';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import YoutubeSearchedForSharpIcon from '@material-ui/icons/YoutubeSearchedForSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {

    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header__left">
                <MenuSharpIcon />
                <Link to="/">
                    <img
                        className="header__logo" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" 
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="header__input">
                <input 
                    onChange={e => setInputSearch(e.target.value)} 
                    value={inputSearch} 
                    type="text" 
                    placeholder="Search" 
                />
                <Link to={`/search/${inputSearch}`}>
                    <YoutubeSearchedForSharpIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallSharpIcon className="header__icon" />
                <AppsSharpIcon className="header__icon" />
                <NotificationsSharpIcon className="header__icon" />
                <Avatar
                    src="https://avatars.githubusercontent.com/u/73519381?v=4"
                    alt="my avatar"
                />
            </div>
        </div>
    )
}

export default Header;
