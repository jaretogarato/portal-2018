import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addCourse, updateCourse } from '../../actions/courses';
import { courseTermOptions, courseTypeOptions, courseYearOptions  } from '../../data/courseForm';
import { CourseFormButton, CourseFormGrid, CourseFormHeader, CourseFormSegment } from '../../styles/styles';
import { Button, Form, Grid, Header, Segment, Select } from 'semantic-ui-react';

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
    const { course_type, term, year } = this.state;
    const { type, course, handleClose } = this.props;
    if(type === 'edit'){
      this.props.dispatch(updateCourse(this.state, course.id));
      handleClose();
    }else{
      this.props.dispatch(addCourse(this.state));
      this.props.cancelAdding();
    }
  }

  handleChange = (e, { id, value }) => this.setState({ [id]: value })

  render() {
    const { course_type, term, year } = this.state;

    return(
      <CourseFormGrid>
        <Grid.Column style={{ maxWidth: 1200, paddingTop: 15 }}>
          <CourseFormSegment>
            <CourseFormHeader>Course Form</CourseFormHeader>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
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
                  width={5}
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
                  width={5}
                  required
                />
              </Form.Group>
            <CourseFormButton>Submit</CourseFormButton>
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