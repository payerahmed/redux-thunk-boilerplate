import React, { Component } from 'react'

class InputDumb extends Component {
  state = {
    inputData: ''
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.inputData !== prevState.inputData) {
      return {
        inputData: nextProps.link
      }
    }

    return null
  }

  render () {
    return (
      <div>
        <input
          value={this.state.inputData}
          type='text'
          onChange={e => this.setState({ inputData: e.target.value })}
        />
        <button onClick={this.props.handleClick(this.state.inputData)}>
          click
        </button><br /><br />
      </div>
    )
  }
}

export default InputDumb
