import React, { Component } from 'react'
import Updatedcom from './WithCounter'
export class Hover extends Component {

   
  render() {
    const {count,handle} = this.props
    return (
      <div>
        <h1 onMouseOver={handle}> Hover {count} Times</h1>
      </div>
    )
  }
}

export default Updatedcom(Hover);
