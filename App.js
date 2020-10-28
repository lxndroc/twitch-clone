// https://github.com/lxndroc/twitch-clone
// npx create-react-app twitch-clone
// font-awesome copy CDN to index.html
// npm i @material-ui/core

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
