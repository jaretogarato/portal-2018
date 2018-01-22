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
  
  const options = [
      { key: 1, text: 'Receive Text', value: 1 },
      { key: 2, text: 'Receive Email', value: 2 },
      { key: 3, text: 'None', value: 3 },
    ]

    if(this.state.edit) {
      return(
        <Segment basic>
          <Button.Group>
            <Button basic onClick={this.toggleEdit}>
              Cancel Editing
            </Button>
            <Menu floated='right'>
            <Dropdown text='Announcements' selection options={options} />
            </Menu>
          </Button.Group>
          <UserEditForm toggleEdit={this.toggleEdit}/>
        </Segment>
      )
    } else {
      return (
        <Segment basic>
          <Button.Group>
            <Button basic onClick={this.toggleEdit}>
              Edit Profile
            </Button>
            <Menu floated='right'>
              <Dropdown text='Announcements' selection options={options} />
            </Menu>
          </Button.Group>
          <Segment basic>
            <Header as='h2'>Your Profile</Header>
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
