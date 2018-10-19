import React, { Component } from "react"

class CountDumb extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>Click Me Baby</button>
        <h1>{this.props.count}</h1>
      </div>
    )
  }
}

export default CountDumb
