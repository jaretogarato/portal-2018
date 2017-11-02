import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { handleUpload } from '../../actions/avatar';
import { sendInvitation } from '../../actions/invitations';
import { Button, Dimmer, Form, Loader, Segment } from 'semantic-ui-react';

class UserForm extends React.Component {
  state = { firstName: '', lastName: '', email: '', image: '' };

  handleSubmit = () => {
    const { modalClose, dispatch } = this.props;
    const { firstName, lastName, email, image } = this.state;
    dispatch(sendInvitation({
      email,
      image,
      first_name: firstName,
      last_name: lastName
    }));
    modalClose();
  }

  toggleUploading = (image) => {
    this.setState({ fileUploading: !this.state.fileUploading });
  }

  setImage = (url) => {
    this.toggleUploading();
    this.setState({image: url});
  }

  onDrop = (avatar) => {
    this.toggleUploading();
    this.props.dispatch(handleUpload(avatar[0], this.setImage));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  uploadDisplay = () => {
    if(this.state.fileUploading) {
      return (
        <Dimmer active>
          <Loader>Attempting to Code...Please Wait..</Loader>
        </Dimmer>
      );
    } else {
      return (
        <Dropzone onDrop={this.onDrop} />
      )
    }
  }

  render() {
    const { email, firstName, lastName } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Segment>
          {this.setImage}
          <Segment>
            {this.setImage}
          </Segment>
        </Segment>
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