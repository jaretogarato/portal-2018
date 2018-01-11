import React, { Component } from 'react';
import { Segment, Form, Button, Header, Divider } from 'semantic-ui-react';
import { addAssignment } from '../../actions/assignments';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const submissionOptions = [
  { key: '1', text: 'No Submission', value: '1' },
  { key: '2', text: 'Online', value: '2' },
  { key: '3', text: 'On Paper', value: '3' },
  { key: '4', text: 'External', value: '4' },
]


class CreateAssignment extends Component {
  state = {
    title: '', submission_type: '', points: 0,
    due_date: '', published: false, content: '',
    created_at: '', updated_at: ''
  }

  handleSubmit = (e) => {
    const { history, dispatch } = this.props
    const {
      title, submission_type, points,
      due_date, published, content,
      created_at, updated_at
    } = this.state
    e.preventDefault();
    
    let assignment = {
      title, submission_type,
      points, due_date, published,
      content, created_at, updated_at
    }
    console.log(assignment)
    dispatch(addAssignment(assignment, history))
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })


  render() {
    const {
      title, submission_type,
      published, content
    } = this.state
    return (
      <Segment basic>
        <Header as="h1" textAlign='center' style={ styles.pageTitle }>
          Create Assignment
        </Header>
        <Form onSubmit={ this.handleSubmit } style={ styles.form }>
          <Form.Group widths='equal'>
            <Form.Input
              label='Title'
              name='title'
              value={ title }
              width={ 9 }
              placeholder='Assignment Title'
              autoFocus={true}
              required
              onChange={ this.handleChange }>
            </Form.Input>
            <Form.Select
              label='Submission Options'
              name={ submission_type }
              options={ submissionOptions }
              placeholder='Submission Options'
              required
              width={ 2 }
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              name='due_date'
              label='Due Date'
              type='date'
              width={ 9 }
              onChange={ this.handleChange } 
            >
            </Form.Input>
            <Form.Input
              label='Points'
              placeholder='Points'
              type='number'
              required
              width={ 2 }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.TextArea
            name='content'
            value={ content }
            style={ styles.textArea }
            label='Description'
            placeholder='Rift Text Editor Placeholder'
            required
            onChange={ this.handleChange }
          />
          <Divider />
          <Form.Checkbox label='Published?' value={ published } />
          <Divider />
          <Form.Group>
            <Button basic color='green' type='submit'>Create</Button> 
            <Link to={'./assignments'}>
              <Button onClick={this.props.history.goBack}>Cancel</Button>
            </Link>
          </Form.Group>
        </Form>
      </Segment>
    )
  }
}

const styles = {
  form: {
    paddingTop: '2%',
  },
  pageTitle: {
    paddingTop: '2%',
    textDecoration: 'underline',
    fontWeight: 'bolder',
  },
  textArea: {
    minHeight: '150px',
  },
}


export default connect()(CreateAssignment);