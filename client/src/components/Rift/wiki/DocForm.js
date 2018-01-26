import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Button,
  Segment,
} from 'semantic-ui-react';

import axios from 'axios';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';


class DocForm extends React.Component {
  state = { title: '', content: '' }

  handleChange = (_, { name, value }) => {
    this.setState({ [name]: value })
  }

  componentWillMount() {
    const { title, content } = this.props
    if (title)
      this.setState({ title, content })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, content } = this.state
    const { dispatch, id, addDoc, toggleAdd, toggleEdit, updateDoc, courseId } = this.props
    const doc = { title, content }
    if (toggleAdd)
      axios.post(`/api/courses/${id}/wiki_docs`, doc)
        .then( res => {
          addDoc(res.data)
          dispatch(setHeaders(res.headers))
          toggleAdd()
        }).catch( err => {
          dispatch(setHeaders(err.headers))
          dispatch(setFlash('Failed to save doc', 'red'))
      });
    else
      axios.put(`/api/courses/${courseId}/wiki_docs/${id}`, doc)
        .then( res => {
          updateDoc(res.data)
          dispatch(setHeaders(res.headers))
          toggleEdit()
        }).catch( err => {
          dispatch(setHeaders(err.headers))
          dispatch(setFlash('Failed to update doc', 'red'))
      });
  }

  render() {
    const { title, content } = this.state
    return(
      <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name='title'
            label='Title'
            value={title}
            onChange={this.handleChange}
          />
          <Form.TextArea
            name='content'
            label='Content'
            value={content}
            onChange={this.handleChange}
          />
          <Button basic onClick={this.handleSubmit}>Save</Button>
        </Form>
      </Segment>
    )
  }
}

export default connect()(DocForm);
