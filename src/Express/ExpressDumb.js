import React, { Component } from 'react'

class CountDumb extends Component {
  render () {
    return (
      <div>
        <button onClick={this.props.handleClick}> Fetch Link</button>
      </div>
    )
  }
}

export default CountDumb
