import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment } from 'semantic-ui-react';
import { addAnnouncement, editAnnouncement } from '../../actions/announcements';
import { stateFromHTML } from 'draft-js-import-html'
import DraftEditor from '../editor/DraftEditor';

class AnnouncementForm extends React.Component {
  state = { body: '' };

  componentDidMount() {
    const { editing, announcement } = this.props
    let html = stateFromHTML(announcement);
    if(editing) {
      this.setState({ body: html });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, course, toggleForm, editing } = this.props;
    const { body } = this.state;
    if(editing) {
      dispatch(editAnnouncement(course.id, body, this.props.announcement.id));
      this.props.toggleEdit();
    } else {
      dispatch(addAnnouncement(course.id, this.state));
      toggleForm();
    }
  }

  contentChange = (body) => {
    this.setState({ body })
  }

  render() {
    const { toggleEdit, editing, text } = this.props;
    return(
      <Segment>
      <Form onSubmit={this.handleSubmit}>
          <DraftEditor dValue={text} onChange={this.handleChange} contentChange={this.contentChange} />
          <Form.Button basic type='submit'>Submit</Form.Button>
          { editing && <Form.Button basic onClick={toggleEdit}>Cancel</Form.Button> }
      </Form>
      </Segment>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    course: state.course,
  }
}

export default connect(mapStateToProps)(AnnouncementForm);
