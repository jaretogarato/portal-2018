import React from 'react';
import Dropzone from 'react-dropzone';
import defaultAvatar from '../../assets/images/missing-avatar.png'
import { connect } from 'react-redux';
import { editUser } from '../../actions/user';
import { handleUpload } from '../../actions/avatars';
import {
  Button,
  Dimmer,
  Divider,
  Form,
  Grid,
  Header,
  Image,
  Input,
  Loader,
  Segment
} from 'semantic-ui-react';

class UserEditForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    bio: '',
    email:  '',
    nickname: '',
    fileUploading: false,
  };

  componentDidMount() {
    const { first_name, last_name, bio, email, nickname } = this.props.user;
    this.setState({ firstName: first_name, bio, email, nickname, last_name });
  }

  toggleUploading = () => {
    this.setState({ fileUploading: !this.state.fileUploading });
  }

  onDrop = (file) => {
    const { user } = this.props
    this.toggleUploading();
    this.props.dispatch(handleUpload(file[0], user, this.toggleUploading));
  }

  handleSubmit = (e) => {
    const { firstName, lastName, bio, email, nickname } = this.state;
    this.props.dispatch(editUser({ first_name: firstName, last_name: lastName, bio, email, nickname }, this.props.user.id))
    this.setState({ bio, email, nickname });
    this.props.toggleEdit();
  }

  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });

  render()  {
    const { bio, email, nickname } = this.state;
    const { user } = this.props;

    return(
      <Form onSubmit={this.handleSubmit}>
        <Segment basic>
          <Header as='h2'>Edit Profile</Header>
        </Segment>
        <Divider />
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment basic style={{ display: 'flex', alignSelf: 'center'}}>
                { this.state.fileUploading ?
                  <Dimmer active>
                    <Loader>Loading</Loader>
                  </Dimmer> :
                  <Dropzone onDrop={this.onDrop}>
                    <Segment basic style={{alignSelf: 'center'}}>
                      { user.avatar_url ?
                        <Image src={`${user.avatar_url}`} /> :
                        <Image src={`${defaultAvatar}`} />
                      }
                      <Header as='h4'
                        style={{textAlign: 'center'}}
                      >
                        Click to update profile picture!
                      </Header>
                    </Segment>
                  </Dropzone>
                }
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h3'>Bio</Header>
                <Divider />
                  <Form.TextArea
                    name='bio'
                    value={bio}
                    onChange={ this.handleChange }
                  />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h4'>Email Address: </Header>
                <Divider />
                <Input
                  required
                  type='email'
                  name='email'
                  value={email}
                  onChange={ this.handleChange }
                />
              </Segment>
              <Segment>
                <Header as='h4'>Nickname</Header>
                <Divider />
                <Input
                  name='nickname'
                  value={nickname}
                  onChange={ this.handleChange }
                />
              </Segment>
              <Button basic type='submit'>Submit</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserEditForm);
