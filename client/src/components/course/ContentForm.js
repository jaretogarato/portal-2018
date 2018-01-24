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
    //TODO: Condense this
    switch(value) {
      case "assignment":
        const assignmentOptions = this.props.assignments.map( content => {
          return { id: content.id, text: content.title, value: content.id }
        })
        this.setState({ itemOptions: assignmentOptions })
        break
      case "lecture":
        const lectureOptions = this.props.lectures.map( content => {
          return { id: content.id, text: content.title, value: content.id }
        })
        this.setState({ itemOptions: lectureOptions })        
        break
      case "quiz":
        const quizOptions = this.props.quizzes.map( content => {
          return { id: content.id, text: content.title, value: content.id }
        })
        this.setState({ itemOptions: quizOptions })
        break
      default:
        break 
    }
  }

  handleSubmit = (e) => {
    const { dispatch, subSectionId, toggleModal } = this.props;
    const { itemId, type } = this.state;
    let courseContent = null
    e.preventDefault();
    //TODO: Condense this
    switch(type) {
      case 'assignment':
        courseContent = { sub_section_id: subSectionId, assignment_id: itemId }
        break
      case 'quiz':
        courseContent = { sub_section_id: subSectionId, quiz_id: itemId }
        break
      case 'lecture':
        courseContent = { sub_section_id: subSectionId, lecture_id: itemId }
        break
      default:
        courseContent =  null
        break
      }
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
                  key={1}
                  label='Type'
                  options={typeOptions}
                  placeholder='Select a Type'
                  onChange={this.getItems}
                  id='type'
                  required
                  width={4}
                />
                <Form.Field
                  control={Select}
                  key={2}
                  label='Item'
                  options={this.state.itemOptions}
                  placeholder='Select an Item'
                  onChange={this.handleChange}
                  id='item'
                  width={12}
                  required
                />
              </Form.Group>
              <CourseFormButton basic>Save</CourseFormButton>
            </Form>
          </CourseFormSegment>
        </Grid.Column>
      </CourseFormGrid>
    )
  }
}

export const typeOptions = [
  { text: 'Assignment', value: 'assignment' },
  { text: 'Lecture', value: 'lecture' },
  { text: 'Quiz', value: 'quiz' }
]

const mapStateToProps = ( state ) => {
  return { 
    quizzes: state.quizzes,
    assignments: state.assignments, 
    lectures: state.lectures
  }
}

export default connect(mapStateToProps)(ContentForm);
