import React from 'react';
import { connect } from 'react-redux';
import { addCourseContent } from '../../actions/courseContent'
import { 
  CourseFormButton, 
  CourseFormGrid, 
  CourseFormHeader, 
  CourseFormSegment 
} from '../../styles/styles';
import { Form, Grid, Select } from 'semantic-ui-react';

class ContentForm extends React.Component {

  state = { itemOptions: [] };

  getItems = (e, { value }) => {
    this.setState({ type: value })
    //TODO: add functionality for assignments and lectures
    switch(value) {
      case "assignment":
        this.setState({ itemOptions: [{ text: "No Assignments" }] })
        break
      case "lecture":
        this.setState({ itemOptions: [{ text: "No Lectures" }] })
        break
      case "quiz":
        const itemOptions = this.props.quizzes.map( content => {
          return { id: content.id, text: content.title, value: content.id }
        })
        this.setState({ itemOptions })
        break
      default:
        break 
    }
  }

  handleSubmit = (e) => {
    const { dispatch, subSectionId, toggleModal } = this.props;
    e.preventDefault();
    const courseContent = { sub_section_id: subSectionId, quiz_id: this.state.itemId }
    dispatch(addCourseContent(courseContent))
    toggleModal()
  }

  handleChange = (e, { value }) => {
    this.setState({ itemId: value })
  }

  render() {
    return(
      <CourseFormGrid width={16}>
        <Grid.Column style={{ maxWidth: 1200, paddingTop: 15 }}>
          <CourseFormSegment>
            <CourseFormHeader>Add Course Content</CourseFormHeader>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Field
                  control={Select}
                  label='Type'
                  options={typeOptions}
                  placeholder='Select a Type'
                  onChange={this.getItems}
                  id='type'
                  required
                  width={8}
                />
                <Form.Field
                  control={Select}
                  label='Item'
                  options={this.state.itemOptions}
                  placeholder='Select an Item'
                  onChange={this.handleChange}
                  id='item'
                  width={8}
                  required
                />
              </Form.Group>
              <CourseFormButton>Save</CourseFormButton>
            </Form>
          </CourseFormSegment>
        </Grid.Column>
      </CourseFormGrid>
    )
  }
}

export const typeOptions = [
  { text: 'Assignments', value: 'assignment' },
  { text: 'Lectures', value: 'lecture' },
  { text: 'Quizzes', value: 'quiz' }
]

const mapStateToProps = ( state ) => {
  return { quizzes: state.quizzes }
}


export default connect(mapStateToProps)(ContentForm);
