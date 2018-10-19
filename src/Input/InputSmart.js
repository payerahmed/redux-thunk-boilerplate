import React, { Component } from 'react'
import InputDumb from './InputDumb'
import { connect } from 'react-redux'
import { InputAction } from './InputAction'

function mapStateToProps (state, ownProps) {
  return {
    link: state.ExpressState.link
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  console.log('own props', ownProps)
  return {
    setInputString: inputData => {
      dispatch(InputAction(inputData))
    }
  }
}

class DataSmart extends Component {
  render () {
    return (
      <div>
        <InputDumb
          link={this.props.link}
          handleClick={inputData => {
            this.props.setInputString(inputData)
          }}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataSmart)
