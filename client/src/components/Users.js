import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import UserForm from './UserForm';

class Users extends React.Component {
  state = { modalOpen: false };
  
  handleOpen = (e) => this.setState({ modalOpen: true });

  handleClose = (e) => this.setState({ modalOpen: false })

  render() {
    return(
      <div>
        <Modal 
          trigger={
            <Button basic onClick={this.handleOpen}>
              <Icon name='add' /> 
              Add User
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
          size='small'
          closeIcon='close'
        >
          <Header as='h1'><Icon name='add user'/> Add User</Header>
          <Modal.Content>
            <UserForm modalClose={this.handleClose} />
          </Modal.Content>
        </Modal>
        <br/>
        <br/>
      </div>
    )
  }
}

export default Users;