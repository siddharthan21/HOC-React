import React, { Component } from 'react'
import Clicker from './clicker'
import Hover from './Hover'
export class App extends Component {
  render() {
    return (
      <div>
        <Clicker />
        <Hover />
      </div>
    )
  }
}

export default App
