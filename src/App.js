import './App.css'
import RewLogo from '../public/img/rew-header.png'

import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <div id="App">
        <img src={RewLogo} style={{ width: '80%' }}/>
        <p>Enjoy your development!</p>
      </div>
    )
  }
}
