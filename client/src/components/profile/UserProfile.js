import React from 'react';
import defaultAvatar from '../../assets/images/missing-avatar.png'
import UserEditForm from './UserEditForm';
import { connect } from 'react-redux';
import {
  Button,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
  Dropdown,
  Menu,
} from 'semantic-ui-react';

class UserProfile extends React.Component {
  state = { edit: false };

  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({ edit: !edit })
  }

  render() {
    const { user } = this.props;

    if(this.state.edit) {
      return(
        <Segment basic>
          <Button.Group>
            <Button onClick={this.toggleEdit}>
              Cancel Editing
            </Button>
            <Menu vertical floated='right'>
              <Dropdown item text='Announcements'>
                <Dropdown.Menu>
                  <Dropdown.Item>Receive Text</Dropdown.Item>
                  <Dropdown.Item>Receive Email</Dropdown.Item>
                  <Dropdown.Item>None</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Button.Group>
          <UserEditForm toggleEdit={this.toggleEdit}/>
        </Segment>
      )
    } else {
      return (
        <Segment basic>
          <Button.Group>
            <Button onClick={this.toggleEdit}>
              Edit Profile
            </Button>
            <Menu vertical floated='right'>
              <Dropdown item text='Announcements'>
                <Dropdown.Menu>
                  <Dropdown.Item>Receive Text</Dropdown.Item>
                  <Dropdown.Item>Receive Email</Dropdown.Item>
                  <Dropdown.Item>None</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Button.Group>
          <Segment textAlign='center' basic>
            <Header as='h1'>Your Profile</Header>
          </Segment>
          <Divider />
          <Grid columns={3} divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment basic style={{alignSelf: 'center'}}>
                  { user.avatar_url ?
                    <Image src={`${user.avatar_url}`} /> :
                    <Image src={`${defaultAvatar}`} />
                  }
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header as='h3'>Bio</Header>
                  <Divider />
                  {user.bio}
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header as='h4'>Email Address: </Header>
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
        </Segment>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserProfile);
