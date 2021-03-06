import React from 'react';
import { connect } from 'react-redux';
import { addCourse, updateCourse, deleteCourse } from '../../actions/courses';
import {
  courseTermOptions,
  courseYearOptions
} from '../../data/courseForm';
import {
  CourseFormButton,
  CourseFormGrid,
  CourseFormSegment,
} from '../../styles/styles';
import {
  Form,
  Grid,
  Select,
} from 'semantic-ui-react';
import { PageTitle } from '../../styles/styledComponents';
import DraftEditor from '../editor/DraftEditor';
import { stateFromHTML } from 'draft-js-import-html';

class CourseForm extends React.Component {
  state = { course_type: '', term: '', year: '', };

  componentDidMount(){
    if(this.props.type === 'edit'){
      const { course_type, term, year } = this.props.course;
      this.setState({course_type, term, year});
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { type, course, toggleModal } = this.props;
    if(type === 'edit'){
      this.props.dispatch(updateCourse(this.state, course.id));
      toggleModal();
    }else{
      //TODO: Error flash message combines error messages without spaces between errors
      this.props.dispatch(addCourse(this.state));
      this.props.cancelAdding();
    }
  }

  deleteCourse = (course) => {
    this.props.dispatch(deleteCourse(course));
  }

  handleChange = (e, { id, value }) => this.setState({ [id]: value })

  contentChange = (course_type) => {
    this.setState({ course_type })
  }

  render() {
    const { course_type, term, year } = this.state;
    const { cancelAdding, course, editing } = this.props;
    return(
      <CourseFormGrid width={16}>
        <Grid.Column style={{ maxWidth: 1200, paddingTop: 15 }}>
          <CourseFormSegment basic>
            <PageTitle>Course Form</PageTitle>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Field width={1} />
                <DraftEditor
                  label='Course'
                  dValue={stateFromHTML(course_type)}
                  contentChange={this.contentChange}
                  id='course_type'
                  required
                  width={6}
                />
                <Form.Field
                  control={Select}
                  label='Term'
                  options={courseTermOptions}
                  placeholder='Select a Term'
                  value={term}
                  onChange={this.handleChange}
                  id='term'
                  width={4}
                  required
                />
                <Form.Field
                  control={Select}
                  label='Year'
                  options={courseYearOptions}
                  placeholder='Select a Year'
                  value={year}
                  onChange={this.handleChange}
                  id='year'
                  width={4}
                  required
                />
                <Form.Field width={1} />
              </Form.Group>
              <CourseFormButton basic>Save</CourseFormButton>
              <CourseFormButton basic onClick={ cancelAdding }>Cancel</CourseFormButton>
              { editing && 
                  <CourseFormButton 
                    basic 
                    style={ styles.right } 
                    onClick={ () => this.deleteCourse(course) }
                  >
                    Delete
                  </CourseFormButton> 
              }
            </Form>
          </CourseFormSegment>
        </Grid.Column>
      </CourseFormGrid>
    )
  }
}

const styles = {
  right: {
    float: 'right',
  },
}

  const mapStateToProps = ( state )  => {
    return { courses: state.courses }
  }


export default connect(mapStateToProps)(CourseForm);
