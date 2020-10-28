// https://github.com/lxndroc/twitch-clone

import React from 'react'

const RecentItem = ({url, title}) => {
    return (
        <div className='item'>
            <iframe
                width='400'
                height='235'
                src={url}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
                allowFullScreen>
            </iframe>
            <div className='item__details'>
                <img src='url'></img>
                <div className='item__detailsText'>
                    <h4>{title}</h4>
                    <p>cp</p>
                    <p>Science & Tech</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem
