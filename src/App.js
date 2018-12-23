import './App.css'
import Logo from '../public/logo.png'

import React from 'react'

class App extends React.Component {
  render () {
    return (
      <div id="App">
        <img id="App-logo" src={Logo}></img>
        <h1>electronApp-boilerplate</h1>
        <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
      </div>
    )
  }
}

export default App
