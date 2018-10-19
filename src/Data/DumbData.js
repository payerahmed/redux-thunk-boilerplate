import React, { Component } from "react"

class CountDumb extends Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
      </div>
    )
  }
}

export default CountDumb
