import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Segment, Header } from 'semantic-ui-react';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';


class Wiki extends Component {
  state = { docs: [] }

  componentDidMount() {
    const { dispatch, match: { params: { id }}} = this.props
    axios.get(`/api/courses/${id}/wiki_docs`)
    .then( res => {
      this.setState({ docs: res.data })
        dispatch(setHeaders, res.headers)
    })
    .catch( err => {
      dispatch(setFlash('Failed to retrieve Wiki Docs', 'red'))
    })
  }

  render() {
    const { docs } = this.state
    return (
      <Segment basic>
        { docs.map( d => {
            return (
              <Segment>
                <Header as='h2'>{d.title}</Header>
                <p>{d.content}</p>
              </Segment>
            )
          })
        }
      </Segment>
    )
  }
}

export default connect()(Wiki);
