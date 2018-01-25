import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Segment,
  Header,
  Button,
} from 'semantic-ui-react';
import DocForm from './DocForm';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';
import { PageTitle } from '../../../styles/styledComponents';


class SingleDoc extends React.Component {
  state = { doc: {}, editing: false }

  componentDidMount() {
    const { dispatch, match: { params: { id, doc_id } } } = this.props
    axios.get(`/api/courses/${id}/wiki_docs/${doc_id}`)
      .then( res => {
        this.setState({ doc: res.data })
        dispatch(setHeaders(res.headers))
      })
      .catch( err => {
        dispatch(setHeaders(err.headers))
        dispatch(setFlash('Failed to retrieve doc', 'red'))
      })
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  updateDoc = (doc) => {
    this.setState({ doc })
  }

  deleteDoc = (doc) => {
    const { dispatch, history, match: { params: { id, doc_id } } } = this.props
    let deleted = window.confirm('Are you sure?')
    if (deleted)
      axios.delete(`/api/courses/${id}/wiki_docs/${doc_id}`)
        .then( res => {
          dispatch(setHeaders(res.headers))
          history.replace(`/courses/${id}/wiki`)
        })
        .catch( err => {
          dispatch(setHeaders(err.headers))
          dispatch(setFlash('Failed to delete doc', 'red'))
        })
  }

  render() {
    const { doc, editing } = this.state
    const { user, match: { params: { id } } } = this.props
    if (editing)
      return (
        <div>
          <Button basic onClick={this.toggleEdit}>
            Cancel
          </Button>
          <DocForm
            title={doc.title}
            content={doc.content}
            id={doc.id}
            courseId={id}
            toggleEdit={this.toggleEdit}
            updateDoc={this.updateDoc}
          />
        </div>
      )
    else
      return (
        <Segment basic>
          <Header as={PageTitle}>{doc.title}</Header>
          { user.is_admin &&
            <div>
              <Button basic onClick={this.toggleEdit}>
                Edit
              </Button>
              <Button basic onClick={this.deleteDoc}>
                Delete
              </Button>
            </div>
          }
          <p>{doc.content}</p>
        </Segment>
      )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(SingleDoc)
