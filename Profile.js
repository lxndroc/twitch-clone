// https://github.com/lxndroc/twitch-clone

import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile__topLeft'>
                <img src=''></img>
                <div className='profile__topLeftDetails'>
                    <h1>cp</h1>
                    <h3>820k followers</h3>
                </div>
            </div>
            <div className='profile__topRight'>
                <i className='fas fa-heart graybg'></i>
                <i className='fas fa-bell graybg'></i>
                <i className='fas fa-ellipsis-v'></i>
            </div>
            <div className='profile__menu'>
                <h2 className='active'>Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i>+</i></h2>
                <h2>Chat</h2>
                <div className='profile__recent'>
                    <h2>Recent broadcasts</h2>
                    <div className='profile__recentItems'>
                        <RecentItem
                            url={'+'}
                            title={'+'}
                        />
                        <RecentItem
                            url={'+'}
                            title={'+'}
                        />
                        <RecentItem
                            url={'+'}
                            title={'+'}
                        />
                    </div>
                    <div className='profile__recentItemsCategories'>
                        +
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Profile
