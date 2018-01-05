import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { handleUpload } from '../../actions/avatar';
import { sendInvitation } from '../../actions/invitations';
import { Button, Dimmer, Form, Loader, Segment } from 'semantic-ui-react';

class UserForm extends React.Component {
  state = { firstName: '', lastName: '', email: '', role: '', image: '' };

  handleSubmit = () => {
    const { courseId, modalClose, dispatch } = this.props;
    const { firstName, lastName, email, image, role } = this.state;
    dispatch(sendInvitation({
      email,
      image,
      first_name: firstName,
      last_name: lastName
    },
      {role: role, course_id: courseId}
    ));
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
    const { email, firstName, lastName, role } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Segment>{this.setImage}</Segment>
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
        <Form.Group inline>
          <Form.Input
            type='radio'
            label='Auditor'
            name='role'
            value='Auditor'
            onChange={this.handleChange}
          />
          <Form.Input
            type='radio'
            label='Student'
            name='role'
            value='Student'
            onChange={this.handleChange}
          />
          <Form.Input
            type='radio'
            label='TA'
            name='role'
            value='TA'
            onChange={this.handleChange}
          />
          <Form.Input
            type='radio'
            label='Teacher'
            name='role'
            value='Teacher'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default connect()(UserForm);
