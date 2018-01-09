import React, { Component } from 'react';
import { Form, Button, Container, Header, Divider } from 'semantic-ui-react';
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
  state = { title: '', content: '', due_date: '' }

  handleSubmit = (e) => {
    const { history, dispatch } = this.props
    e.preventDefault();
    let assignment = { due_date: this.state.due_date, title: this.state.title, content: this.state.content }
    dispatch(addAssignment(assignment, history))
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })


  render() {
    const { title, content, due_date } = this.state
    return (
      <Container>
        <Header as="h1" textAlign='center' style={ styles.pageTitle }>Create Assignment</Header>
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
              onChange={this.handleChange}>
            </Form.Input>
            <Form.Select
              label='Submission Options'
              options={ submissionOptions }
              placeholder='Submission Options'
              required
              width={ 2 }
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              name='due_date'
              value={ due_date }
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
              width={ 2 } />
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
          <Form.Checkbox label='Published?' />
          <Divider />
          <Form.Group>
            <Link to={`/courses/{this.props.id}/assignments`} >
              <Button>Create</Button>
            </Link>
            <Button onClick={this.props.history.goBack}>Cancel</Button>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

const styles = {
  form: {
    paddingTop: '2%',
  },
  pageTitle: {
    paddingTop: '2%',
  },
  textArea: {
    minHeight: '150px',
  },
}

export default connect()(CreateAssignment);
