import React from 'react'
import { connect } from 'react-redux'
import { getPermissions } from '../../actions/permissions'
import { withRouter } from 'react-router-dom';


class FetchEnrollment extends React.Component {

  componentDidMount(){
    const { dispatch, match: { params: { id } } } = this.props
    dispatch(getPermissions(id))
  }

  render() {
    return this.props.children
  }
}

export default withRouter(connect()(FetchEnrollment));
