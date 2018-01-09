import React from 'react';
import { connect } from 'react-redux';
import { sendInvitation } from '../../actions/invitations';
import { withRouter } from 'react-router-dom';
import { Button, Form, Select } from 'semantic-ui-react';

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
        <Select options={this.roles()} defaultValue="Student" />
        <br />
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default withRouter(connect()(UserForm));
