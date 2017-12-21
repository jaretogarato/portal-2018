import React, { Component } from 'react'
import { Container, Form, Header } from 'semantic-ui-react';


class CreateAssignment extends Component {

  render() {
    return (
      <Container>
        <Form>
          <Header as="h2">Create new Assignment</Header>
          <Form.Field>
            <label>Create Assignment Title</label>
            <input placeholder='Create Assignment Title' />
          </Form.Field>
        </Form>
      </Container>
    )
  }

}

export default CreateAssignment;