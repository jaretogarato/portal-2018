import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment, Select } from 'semantic-ui-react'
import { addCourse, updateCourse } from '../actions/courses'
import { connect } from 'react-redux';
import styled from 'styled-components';

const CourseFormHeader = styled(Header)`
  color: purple !important;
  text-align: center;
  font-size: 2em !important;
`;

const CourseFormGrid = styled(Grid)`
  text-align: center;
  justify-content: center;
`;

const CourseFormSegment = styled(Segment)`
  justify-content: center;
`;

const CourseFormButton = styled(Button)`
  background-color: purple !important;
  color: white !important;
`;

const courseTypeOptions = [
  {
    text: 'UofU Full-Time Fullstack WebDev',
    value: 'UofU Full-Time Fullstack WebDev',
  },
  {
    text: 'Part Time-Fullstack WebDev',
    value: 'Part Time-Fullstack WebDev',
  },
  {
    text: 'WebDev Prep',
    value: 'WebDev Prep',
  },
  {
    text: 'DPL Career Services Certificate',
    value: 'DPL Career Services Certificate',
  },
]

const termOptions = [
  { text: 'Summer', value: 'Summer' },
  { text: 'Fall', value: 'Fall' },
  { text: 'Winter', value: 'Winter' },
  { text: 'Spring', value: 'Spring' },
]

const yearOptions = [
  { text: '2014', value: 2014 },
  { text: '2015', value: 2015 },
  { text: '2016', value: 2016 },
  { text: '2017', value: 2017 },
  { text: '2018', value: 2018 },
  { text: '2019', value: 2019 },
  { text: '2020', value: 2020 },
  { text: '2021', value: 2021 },
  { text: '2022', value: 2022 },
  { text: '2023', value: 2023 },
  { text: '2024', value: 2024 },
  { text: '2025', value: 2025 },
]


class CourseForm extends Component {
  state = { course_type: '', term: '', year: ''  }

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
                  options={termOptions}
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
                  options={yearOptions}
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
