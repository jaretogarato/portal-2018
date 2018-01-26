import React from 'react';
import UserNotifications from './UserNotifications';
import UserEditForm from './UserEditForm';
import { connect } from 'react-redux';
import {
  Button,
  Segment,
  Dropdown,
  Menu,
} from 'semantic-ui-react';


class UserProfile extends React.Component {
  state = { settings: '' };

  toggleSettings = () => {
    switch(this.state.settings) {
      case 1:
        return <UserEditForm />
      case 2:
        return <UserNotifications />
      default:
        return <UserEditForm />
    }
  }

  handleSelection = (e, { value }) => this.setState({ settings: value });

  render() {
    const options = [
      { key: 1, text: 'Settings', value: 1 },
      { key: 2, text: 'Notifications', value: 2 },
    ]
    return(
      <Segment basic style={{paddingTop: '80px'}}>
        <Button.Group>
          <Menu floated='right'>
          <Dropdown text='Settings' onChange={this.handleSelection} selection options={options} />
          </Menu>
        </Button.Group>
        { this.toggleSettings() }
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserProfile);
