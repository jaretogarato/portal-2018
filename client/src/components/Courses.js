import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import CourseForm from './CourseForm';
import {Card, Segment, Button } from 'semantic-ui-react';
import axios from 'axios';

class Courses extends Component {
  state = {courses: []}

  componentDidMount() {
    axios.get('/api/courses')
    .then( res => {
      this.setState({ courses: res.data["courses"] })
    })
    .catch( err => {
    })
  }

  renderCourses = () => {
    const { courses } = this.state;
    return courses.map( course =>
      <Card key={course.id}>
        <Card.Content>
          <h1>{course.course_type}</h1>
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
export default Courses;