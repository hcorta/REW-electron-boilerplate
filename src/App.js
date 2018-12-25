import './App.css'
import RewLogo from '../public/img/rew-logo.png'

import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <div id="App">
        <img src={RewLogo}></img>
        <p>Enjoy your development!</p>
      </div>
    )
  }
}
