import React from 'react';
import { connect } from 'react-redux';
import { sendInvitation } from '../../actions/invitations';
import { withRouter } from 'react-router-dom';
import { Button, Form, Select, Grid, Container  } from 'semantic-ui-react';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';

class UserForm extends React.Component {
  defaultState = { firstName: '', lastName: '', email: '', role: '', image: '' }
  state = {...this.defaultState};

  handleSubmit = () => {
    const { match: { params }, dispatch } = this.props;
    const courseId = params.id;
    const { firstName, lastName, email, image, role } = this.state;
    dispatch(sendInvitation({
        email,
        image,
        first_name: firstName,
        last_name: lastName
      },
      { role, course_id: courseId }
    ));
    this.setState({...this.defaultState})
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  roles = () => {
    return [
      { value: 'student', text: 'Student' },
      { value: 'ta', text: 'TA', },
      { value: 'teacher', text: 'Teacher' },
      { value: 'auditor', text: 'Auditor' }
    ].map( role => {
      return { key: role.value, text: role.text, value: role.value }
    });
  }

  render() {
    const { email, firstName, lastName } = this.state;
    return (
      <Segment basic>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label='First Name'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            label='Last Name'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            label='Email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <Container>
            <Grid columns={4} >
              <Grid.Row>
              <Grid.Column>
                  <Select options={this.roles()} defaultValue="Student" />
              </Grid.Column>
              <Grid.Column>
                  <Button basic type='submit'>Submit</Button>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>

        </Form>
      </Segment>
    )
  }
}

export default withRouter(connect()(UserForm));
