import React, { Component } from "react"
import DataDumb from "./DataDumb"
import { connect } from "react-redux"
import { DataAction } from "./DataAction"
import { fetchData } from "./DataThunk"

function mapStateToProps(state, ownProps) {
  console.log("whole state from data", state)
  return {
    data: state.DataState.data,
    count: state.CountState.count,
    inputString: state.InputState.inputData
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchData: (count,inputString) => () => {
      dispatch(fetchData(count, inputString))
    }
  }
}

class DataSmart extends Component {
  render() {
    let { data, fetchData, count, inputString } = this.props
    return (
      <div>
        <DataDumb data={data} fetchData={fetchData(count, inputString)} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataSmart)
