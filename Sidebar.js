// https://github.com/lxndroc/twitch-clone

import React from 'react'
import Channel from './Channel'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <h5>FOLLOWED CHANNELS</h5>
                <Channel avatar='url'
                    name='cp'
                    followers='820k'
                />
                <Channel avatar='url'
                    name='PiNNyBoy'
                    followers='200k'
                />
                <h5>RECOMMENDED CHANNELS</h5>
                <Channel avatar='url'
                    name='davidrakosi_'
                    followers='1352'
                />
                <p className='sidebar__topShowMore'>Show More</p>
            </div>
            <div className='sidebar__bottom'>
                <div className='sidebar__bottomContainer'>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
