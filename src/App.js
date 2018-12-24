import './App.css'
import Logo from '../public/img/logo.png'
import ReactIcon from '../public/img/react-icon.png'

import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <div id="App">
        <img src={ReactIcon} id="App-logo"/>
        <p>Enjoy your development!</p>
        {/* <img src={Logo} style={{ width: '80%' }}/> */}
      </div>
    )
  }
}
