import React, { Component } from "react"
import InputDumb from "./InputDumb"
import { connect } from "react-redux"
import { InputAction } from "./InputAction"

function mapDispatchToProps(dispatch, ownProps) {
  console.log("own props", ownProps)
  return {
    setInputString: inputData => {
      dispatch(InputAction(inputData))
    }
  }
}

class DataSmart extends Component {
  render() {
    return (
      <div>
        <InputDumb
          handleClick={inputData => {
            this.props.setInputString(inputData)
          }}
        />
      </div>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(DataSmart)
