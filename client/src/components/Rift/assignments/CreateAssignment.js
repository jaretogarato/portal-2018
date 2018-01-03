import React, { Component } from 'react';
import { Container, Header, Segment, Icon, Grid, Table, Button, Form, Input, Message, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const submissionOptions = [
  { key: '1', text: 'No Submission', value: '1' },
  { key: '2', text: 'Online', value: '2' },
  { key: '3', text: 'On Paper', value: '3' },
  { key: '4', text: 'External', value: '4' },
]

class CreateAssignment extends Component {
  state = {}


  render() {
    const { value } = this.state
    return (
      <Container>
        <Header as="h1" textAlign='center' style={styles.pageTitle}>All Assignments</Header>
        <Segment>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input focus label='Assignment Title' placeholder='Assignment Title' required width={9} />
              <Form.Select label='Submission Options' options={ submissionOptions } placeholder='Submission Options' required width={2} />
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Input label='Due Date' type='date' width={9} />
              <Form.Input label='Points' placeholder='Points' type='number' required width={2} />
            </Form.Group>
            <Form.TextArea style={ styles.textArea }label='Content' placeholder='Rift Text Editor Placeholder' required />
            <Form.Checkbox label='Published?' />
            <Divider />
            <Form.Button primary>Create Assignment</Form.Button>
          </Form>
        </Segment>
      </Container>
    )
  }
}

const styles = {
  pageTitle: {
    paddingTop: '2%',
  },
  textArea: {
    minHeight: '150px',
  },
}


export default CreateAssignment;
