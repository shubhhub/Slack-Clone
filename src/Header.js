import React from 'react'
import './Header.css'
import { Avatar } from "@mui/material"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ user }] = useStateValue();

    // console.log(user.photoURL)
    return (
        <div className='header'>
            <div className='header__left'>

                {/* Avatar for logged in user */}
                {/** Time icon */}
                
                <Avatar
                    className='header__avatar'
                    // alt = 'Shubh Garg' 
                    alt={user?.displayName}
                    // src = '' 
                    
                    src={user?.photoURL}
                />
                <AccessTimeIcon />

            </div>
            <div className='header__search'>
                {/**Search icon */}
                <SearchIcon />
                {/** input */}
                <input placeholder='slack-app'></input>
            </div>
            <div className='header__right'>
                {/**help icon */}
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header