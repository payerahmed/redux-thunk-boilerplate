import React, { Component } from "react"
import DumbData from "./DumbData"
import { connect } from "react-redux"
import { DataAction } from "./DataAction"

function mapStateToProps(state, ownProps) {
  return {
    data: state.DataState.data
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log("own props", ownProps)
  return {
    increaseCount: () => {
      dispatch(CountAction(0))
    }
  }
}

class DataSmart extends Component {
  render() {
    return (
      <div>
        <DumbData data={this.props.data} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataSmart)
