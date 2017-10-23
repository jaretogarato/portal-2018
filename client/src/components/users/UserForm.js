import React from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { sendInvitation } from '../../actions/invitations';

class UserForm extends React.Component {
  state = { firstName: '', lastName: '', email: '' };

  handleSubmit = () => {
    const { modalClose, dispatch } = this.props;
    const { firstName, lastName, email } = this.state;
    dispatch(sendInvitation({
      email, 
      first_name: firstName,
      last_name: lastName
    }));
    modalClose();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, firstName, lastName } = this.state;
    return(
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
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default connect()(UserForm);