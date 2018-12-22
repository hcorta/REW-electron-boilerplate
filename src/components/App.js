import '../assets/css/App.css'
import React from 'react'

class App extends React.Component {
  render () {
    return (
      <div style={{ height: '100vh', width: '100%', background: 'rgb(50,60,75)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h1>electronApp-boilerplate</h1>

        <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
      </div>
    )
  }
}

export default App
