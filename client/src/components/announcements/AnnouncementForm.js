import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { addAnnouncement } from '../../actions/announcements';
import { withRouter } from 'react-router-dom';

class AnnouncementForm extends React.Component {
  state = { title: '', body: '' };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, course, toggleForm } = this.props;
    const { title, body } = this.state;
    dispatch(addAnnouncement(course.id, this.state));
    toggleForm();
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field>
            <label>Title</label>
            <Form.Input name='title' placeholder='Title' onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Body</label>
            <Form.TextArea name='body' placeholder='Body' onChange={this.handleChange} />
          </Form.Field>
          <Form.Button basic>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    course: state.course,
  }
}

export default connect(mapStateToProps)(withRouter(AnnouncementForm));