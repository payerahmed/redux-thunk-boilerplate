import React, { Component } from 'react'
import ExpressDumb from './ExpressDumb'
import { connect } from 'react-redux'
import { fetchLink } from './ExpressThunk'

function mapStateToProps (state, ownProps) {
  console.log('whole state from express', state)
  return {
    link: state.ExpressState.link
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    fetchLink: () => {
      console.log('1')
      dispatch(fetchLink())
    }
  }
}

class ExpressSmart extends Component {
  render () {
    let { link, fetchLink } = this.props
    return (
      <div>
        <ExpressDumb
          link={link}
          handleClick={() => {
            fetchLink()
          }}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpressSmart)
