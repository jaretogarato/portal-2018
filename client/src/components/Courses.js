import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import CourseForm from './CourseForm';
import {Card, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getCourses } from '../actions/courses';

class Courses extends Component {
  state = {courses: []}

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCourses() )
  }

  renderCourses = () => {
    const { courses } = this.props;
    return courses.map( courses =>
      <Card key={courses.id}>
        <Card.Content>
          <h1>{courses.course_type}</h1>
        </Card.Content>
      </Card>
    ) 
  }
  
  render() {
    return(
      <div>
      <Segment>
        <Link to='/courseform'>
            <Button
              color='purple'
              basic
            >
            Create Course
            </Button>
          </Link>
      </Segment>
      
      <Card.Group>
        { this.renderCourses() }
      </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { courses: state.courses }
}

export default connect(mapStateToProps) (Courses);