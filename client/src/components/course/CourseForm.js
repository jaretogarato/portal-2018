import React from 'react';
import { connect } from 'react-redux';
import { addCourse, updateCourse } from '../../actions/courses';
import { courseTermOptions, courseTypeOptions, courseYearOptions  } from '../../data/courseForm';
import { CourseFormButton, CourseFormGrid, CourseFormHeader, CourseFormSegment } from '../../styles/styles';
import { Form, Grid, Select } from 'semantic-ui-react';

class CourseForm extends React.Component {
  state = { course_type: '', term: '', year: ''  };

  componentWillMount(){
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

  handleChange = (e, { id, value }) => this.setState({ [id]: value })

  render() {
    const { course_type, term, year } = this.state;

    return(
      <CourseFormGrid width={16}>
        <Grid.Column style={{ maxWidth: 1200, paddingTop: 15 }}>
          <CourseFormSegment>
            <CourseFormHeader>Course Form</CourseFormHeader>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Field width={1} />
                <Form.Field
                  control={Select}
                  label='Course'
                  options={courseTypeOptions}
                  placeholder='Select a Course'
                  value={course_type}
                  onChange={this.handleChange}
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
            <CourseFormButton>Save</CourseFormButton>
            </Form>
          </CourseFormSegment>
        </Grid.Column>
      </CourseFormGrid>
    )
  }
}

  const mapStateToProps = ( state )  => {
    return { courses: state.courses }
  }


export default connect(mapStateToProps)(CourseForm);
