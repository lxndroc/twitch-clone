import React from 'react'
import './Stream.css'

const Stream = () => {
    return (
        <div className='stream'>
            <div className='stream__container'>
                <div className='stream__status'>
                    <div className='stream__statusContainer'>
                        <div className='stream__statusContainerTop'>
                            <div className='stream__statusIndicator'>
                                <h2>Check out the below streams from cp</h2>
                            </div>
                            <div className='stream__statusInfo'>
                                +
                            </div>
                        </div>
                    </div>
                </div>
                <div className='stream__videoEmbed'>
                    <iframe
                        width='500'
                        height='295'
                        // +
                    >
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Stream
