// https://github.com/lxndroc/twitch-clone

import React from 'react'
import Avatar from '@material-ui/core'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <div className='header__leftLogo'>
                </div>
                <div className='header__verticalLine'>
                </div>
            </div>
            <div className='header__center'>
                <div className='header__centerLogoContainer'>
                </div>
            </div>
            <div className='header__right'>
                <div className='header__rightContainer'>
                    <div className='header__rightBits'>
                    </div>
                </div>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
