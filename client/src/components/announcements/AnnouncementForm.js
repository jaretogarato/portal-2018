import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment } from 'semantic-ui-react';
import { addAnnouncement, editAnnouncement } from '../../actions/announcements';


class AnnouncementForm extends React.Component {
  state = { title: '', body: '' };

  componentDidMount() {
    const { editing } = this.props;
    if(editing) {
      this.setState({ body: this.props.announcement.body, title: this.props.announcement.title });
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
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Title</label>
              <Form.Input 
                name='title' 
                placeholder='Title' 
                onChange={this.handleChange} 
                value={this.state.title} 
              />
            </Form.Field>
            <Form.Field>
              <label>Body</label>
              <Form.TextArea 
                name='body' 
                placeholder='Body' 
                onChange={this.handleChange} 
                value={this.state.body} 
              />
            </Form.Field>
            <Form.Button basic type='submit'>Submit</Form.Button>
            { editing && <Form.Button basic onClick={toggleEdit}>Cancel</Form.Button> }
          </Form.Group>
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