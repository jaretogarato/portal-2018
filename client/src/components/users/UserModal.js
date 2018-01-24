import React from 'react';
import UserForm from './UserForm';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { PageTitle } from '../../styles/styledComponents';

class UserModal extends React.Component {
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
          <PageTitle><Icon name='add user'/> Add User</PageTitle>
          <Modal.Content>
            <UserForm modalClose={this.handleClose} courseId={this.props.courseId} />
          </Modal.Content>
        </Modal>
        <br/>
        <br/>
      </div>
    )
  }
}

export default UserModal;
