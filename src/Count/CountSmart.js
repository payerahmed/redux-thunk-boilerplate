import React, { Component } from "react"
import CountDumb from "./CountDumb"
import { connect } from "react-redux"
import { CountAction } from "./CountAction"

function mapStateToProps(state, ownProps) {
  console.log("whole srtate", state)
  return {
    count: state.CountState.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCount: count => () => {
      dispatch(CountAction(count))
    }
  }
}

class CountSmart extends Component {
  render() {
    return (
      <div>
        <CountDumb
          count={this.props.count}
          handleClick={this.props.increaseCount(this.props.count)}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountSmart)
