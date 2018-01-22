import React from 'react';
import { acceptInvitation } from '../actions/invitations';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { Form, Header } from 'semantic-ui-react';

class InviteConfirmation extends React.Component {
  state = { password: '', passwordConfirmation: '' };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { password, passwordConfirmation } = this.state;
    const { dispatch, history, location: { search } } = this.props;
    const invitationToken = search.split("?token=")[1]

    if(password !== passwordConfirmation) {
      dispatch(setFlash('Passwords do not match', 'red'));
    } else if(password.length < 8) {
      dispatch(setFlash('Password minimum length is 8', 'red'));
    } else {
      dispatch(acceptInvitation({ ...this.state, invitation_token: invitationToken }, history));
    }
  }

  render() {
    const { password, passwordConfirmation } = this.state;
    return(
      <Form onSubmit={this.handleSubmit}>
        <Header as='h2' textAlign='center'>Portal - Set Password</Header>
        <Form.Input 
          label='Password'
          name='password'
          type='password'
          value={password}
          onChange={this.handleChange}
          required
        />
        <Form.Input 
          label='Password Confirmation'
          name='passwordConfirmation'
          type='password'
          value={passwordConfirmation}
          onChange={this.handleChange}
          required
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default connect()(InviteConfirmation);