import React from 'react'
import { connect } from 'react-redux'
import { getPermissions } from '../../actions/permissions'
import { withRouter } from 'react-router-dom';


class FetchEnrollment extends React.Component {
  state = { loaded: false }

  componentDidMount(){
    const { dispatch, match: { params: { id } } } = this.props
    dispatch(getPermissions(id))
  }

  componentWillReceiveProps() {
    if (!this.state.loaded) this.loaded();
  }

  loaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    return this.state.loaded && this.props.children
  }
}

export default withRouter(connect()(FetchEnrollment));
