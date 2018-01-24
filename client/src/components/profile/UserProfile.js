import React from 'react';
import UserEditForm from './UserEditForm';
import { connect } from 'react-redux';
import {
  Button,
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
    const options = [
      { key: 1, text: 'Receive Text', value: 1 },
      { key: 2, text: 'Receive Email', value: 2 },
      { key: 3, text: 'None', value: 3 },
    ]
    return(
      <Segment basic>
        <Button.Group>
          <Menu floated='right'>
            <Dropdown text='Announcements' selection options={options} />
          </Menu>
        </Button.Group>
        <UserEditForm toggleEdit={this.toggleEdit}/>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserProfile);
