import React from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import './css/header.css';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                <ReorderIcon></ReorderIcon>
                </IconButton>
                <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' alt='Logo'/>
            </div>
            <div className='header__middle'>
                <div className='search__mail'>
                <IconButton>
                <SearchIcon></SearchIcon>
                </IconButton>
                <input type='text' placeholder='Search mail'/>
                <IconButton>
                <ExpandMoreIcon></ExpandMoreIcon>
                </IconButton>
                </div>
            </div>
            <div className='header__right'>
            <IconButton>
                <HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>
                </IconButton>

                <IconButton>
                <SettingsIcon></SettingsIcon>
                </IconButton>

                <IconButton>
                <AppsIcon></AppsIcon>
                </IconButton>

                <Avatar src=''></Avatar>

            </div>
        </div>
    )
}

export default Header;
