import React from 'react';
import ContentForm from './ContentForm';
import { Modal, Icon, Popup } from 'semantic-ui-react';

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
          <Popup basic content="Add Subsection" trigger={
            <Icon 
              link 
              size="large" 
              name='add' 
              style={{float: "right"}} 
              onClick={this.toggleModal}/> 
            }
          />
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