// https://github.com/lxndroc/twitch-clone
// References:
//  1. youtube.com/watch?v=0pFqFGwL9mA
//  2. youtube.com/watch?v=f9wxmJx0oXE
//  3. youtube.com/watch?v=ygVEEkBsNWE
// npx create-react-app twitch-clone

import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'
import './App.css'

const App = () => {
    return (
        <div className='app'>
          <Header/>    
          <div className='app__main'>
              <Sidebar/>
              <Body/>
          </div>
        </div>
    )
}

export default App
