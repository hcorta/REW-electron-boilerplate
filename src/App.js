import './App.css'
import Logo from '../public/img/logo.png'

import React from 'react'

class App extends React.Component {
  render () {
    return (
      <div id="App">
        <img src={Logo}></img>
        <h1>REW-Electron-Boilerplate</h1>
        <p>A jump-start boilerplate based on Electron + Webpack + React for building Cross-Platform Desktop Apps</p>
      </div>
    )
  }
}

export default App
