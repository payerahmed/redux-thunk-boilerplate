import React, { Component } from "react"

class InputDumb extends Component {
  state = {
    inputData: ""
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.setState({ inputData: e.target.value })}
        />
        <button onClick={this.props.handleClick(this.state.inputData)}>
          click
        </button>
      </div>
    )
  }
}

export default InputDumb
