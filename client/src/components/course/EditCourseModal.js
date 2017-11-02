import React from 'react';
import CourseForm from './CourseForm';
import { Button, Modal } from 'semantic-ui-react';

class EditCourseModal extends React.Component {
  state = { modalOpen: false };

  handleOpen = (e) => {
    this.setState({ modalOpen: true })
  }

  handleClose = (e) => {
    this.setState({ modalOpen: false })
  }

  render(){
    const { course } = this.props;
    const { modalOpen } = this.state;
    return(
      <Modal
        open={modalOpen}
        onClose={this.handleClose}
        trigger={
          <Button basic color='orange' onClick={this.handleOpen}>Edit</Button>
        }
      >
        <CourseForm type='edit' course={course} handleClose={this.handleClose}/>
      </Modal>
    );
  }
}

export default EditCourseModal;