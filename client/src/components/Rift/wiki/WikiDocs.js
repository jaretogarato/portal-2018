import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Form,
  List,
  Header,
  Segment,
  Dimmer,
  Loader,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DocForm from './DocForm';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';
import { PageTitle, PageSubTitle } from '../../../styles/styledComponents';


class WikiDocs extends Component {
  state = { docs: [], add: false, title: '', content: '' }

  componentDidMount() {
    const { dispatch, match: { params: { id } } } = this.props
    axios.get(`/api/courses/${id}/wiki_docs`)
    .then( res => {
      this.setState({ docs: res.data })
      dispatch(setHeaders(res.headers))
    })
    .catch( err => {
      dispatch(setHeaders(err.headers))
      dispatch(setFlash('Failed to retrieve Wiki Docs', 'red'))
    })
  }

  toggleAdd = () => {
    this.setState({ add: !this.state.add })
  }

  addDoc = (doc) => {
    this.setState({ docs: [...this.state.docs, doc] })
  }

  render() {
    const { docs, add } = this.state
    const { course, user, match: { params: { id } } } = this.props
    if (course)
      return (
        <Segment basic>
          <Header as={PageTitle}>{course.course_type}</Header>
          <Header as={PageSubTitle}>Wiki</Header>
          { user.is_admin &&
            <Button basic onClick={this.toggleAdd}>
              { add ? 'Cancel' : 'Add Doc' }
            </Button>
          }
          { add && <DocForm id={id} addDoc={this.addDoc} toggleAdd={this.toggleAdd} /> }
          <List>
            { docs.map( (d, i) => {
                return (
                  <List.Item key={i}>
                    <Link to={`./wiki/${d.id}`}>{d.title}</Link>
                  </List.Item>
                )
              })
            }
          </List>
        </Segment>
      )
    else
      return (
        <Dimmer active style={styles.dimmer}>
          <Loader>Loading...</Loader>
        </Dimmer>
      )
  }
}

const styles = {
  dimmer: {
    height: '80vh'
  }
}

const mapStateToProps = (state) => {
  return { course: state.course, user: state.user }
}

export default connect(mapStateToProps)(WikiDocs);
