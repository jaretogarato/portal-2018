import React, { Component } from 'react';
import { handleUpload } from '../actions/avatar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import UserEditForm from './UserEditForm';
import {
    Button,
    Segment, 
    Grid, 
    Image, 
    Header, 
    Container,
    Divider,
  } from 'semantic-ui-react';

class UserProfile extends Component {
   state = { fileUploading: false, edit: false }

    onDrop = (avatar) => {
      // dispatch the handleUpload action pass it the photo
      this.toggleUploading();
      this.props.dispatch(handleUpload(avatar[0], this.toggleUploading));
    }

    toggleUploading = () => {
      this.setState({ fileUploading: !this.state.fileUploading });
    }

    assignAvatar = () => {
      return this.props.photos.map( photo => {
        return(
          <Grid.Column width={4} key={photo.id}>
            <Image src={photo.url} fluid />
          </Grid.Column>
        );
      });
    }

    toggleEdit = () => {
      const { edit } = this.state;
      this.setState({ edit: !edit })
    }

    render() {
      const { user } = this.props;
      if(this.state.edit) {
        return(
          <Segment>
            <Button onClick={this.toggleEdit}>
              Edit
            </Button>
            <UserEditForm toggleEdit={this.toggleEdit}/>
          </Segment>
        )
      } else {
        return (
          <Container>
            <Button onClick={this.toggleEdit}>
              Edit
            </Button>
            <Segment textAlign='center' basic>
              <Header as='h2'>{user.first_name} {user.last_name}'s Profile</Header>
            </Segment>
            <Divider />
            <Grid columns={3} divided>
              <Grid.Row stretched>
                <Grid.Column>
                  <Segment basic style={{ display: 'flex', alignSelf: 'center'}}>
                    <Dropzone
                      onDrop={this.onDrop}
                    />
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment basic>
                    <Header as='h3'>{user.first_name}'s Bio</Header>
                    <Divider />
                    {user.bio}
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment basic>
                    <Header as='h4'>{user.first_name}'s Email Address: </Header>
                    <Divider />
                    <i>{user.email}</i>
                  </Segment>
                  <Segment basic>
                    <Header as='h4'>Nickname</Header>
                    <Divider />
                    <p>{user.nickname}</p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        )
      }
    }

}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserProfile);