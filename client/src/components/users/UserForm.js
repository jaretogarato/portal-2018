import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { handleUpload } from '../../actions/avatar';
import { sendInvitation } from '../../actions/invitations';
import { Button, Dimmer, Form, Loader, Segment, Select } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class UserForm extends React.Component {
  state = { firstName: '', lastName: '', email: '', role: 'Student', image: '' };

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

  roles = () => {
    return ['Student', 'Ta', 'Teacher', 'Auditor'].map( role => {
      return { key: role, text: role, value: role }
    });
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
        <Select options={this.roles()} defaultValue="Student" />
        <br />
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default withRouter(connect()(UserForm));
