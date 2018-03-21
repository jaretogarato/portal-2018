import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment } from 'semantic-ui-react';
import { addAnnouncement, editAnnouncement } from '../../actions/announcements';


class AnnouncementForm extends React.Component {
  state = { text: '' };

  componentDidMount() {
    const { editing } = this.props;
    if(editing) {
      this.setState({ text: this.props.announcement.body, title: this.props.announcement.title });
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, course, toggleForm, editing } = this.props;
    // const { title, body } = this.state;
    if(editing) {
      dispatch(editAnnouncement(course.id, this.state, this.props.announcement.id));
      this.props.toggleEdit();
    } else {
      dispatch(addAnnouncement(course.id, this.state));
      toggleForm();
    }
  }

  render() {
    const { toggleEdit, editing } = this.props;
    return(
      <Segment>
      <Form onSubmit={this.handleSubmit}>
            <Form.Input
              name='title'
              label='Title'
              placeholder='Title'
              onChange={this.handleChange}
              value={this.state.title}
            />
            <Form.TextArea
              name='body'
              label='Body'
              placeholder='Body'
              onChange={this.handleChange}
              value={this.state.body}
            />
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
