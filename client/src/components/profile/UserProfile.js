import React, { Component } from 'react';
import { handleUpload, setAvatars } from '../../actions/avatar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserEditForm from './UserEditForm';
import {
   Segment,
   Dimmer,
   Loader,
   Button,
   Grid,
   Image,
   Header,
   Container,
   Divider,
} from 'semantic-ui-react';

class UserProfile extends Component {
   state = { fileUploading: false, edit: false }



   componentDidMount() {
    this.props.dispatch(setAvatars());
  }

  assignAvatar = () => {
    return this.props.avatars.map( avatar => {
      return(
        <Grid.Column key={avatar.id}>
          <Image src={avatar.url} fluid />
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
              Cancel Editting
            </Button>
            <UserEditForm toggleEdit={this.toggleEdit}/>
          </Segment>
        )
      } else {
      // const { avatars } = user.img;
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
  return { user: state.user, avatars: state.avatars }
}

export default connect(mapStateToProps)(UserProfile);
