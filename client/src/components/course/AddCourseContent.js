import React from 'react';
import ContentForm from './ContentForm';
import { Button, Modal, Icon } from 'semantic-ui-react';

class AddCourseContent extends React.Component {
  state = { modalOpen: false };

  toggleModal = (e) => {
    const { modalOpen } = this.state
    this.setState({ modalOpen: !modalOpen })
  }

  render(){
    const { modalOpen } = this.state;
    return(
      <Modal
        open={ modalOpen }
        onClose={ this.toggleModal }
        trigger={
          <Icon name="add" size="large" onClick={this.toggleModal} />
        }
      >
        <ContentForm 
          content={this.props.content} 
          subSectionId={this.props.subSectionId} 
          toggleModal={this.toggleModal}
        />
      </Modal>
    );
  }
}

export default AddCourseContent;