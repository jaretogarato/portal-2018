import React from 'react';
import EditCourseModal from './EditCourseModal';
import { Link } from 'react-router-dom'
import { Button, Card, Grid } from 'semantic-ui-react';

const Course = ({ course }) => (
  <Grid.Column key={course.id}>
    <Card>
      <Card.Content>
        <Card.Header>
          {course.course_type}
        </Card.Header>
        <Card.Meta>
          {course.term} {course.year}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button 
            basic 
            color='blue' 
            as={Link} 
            to={`/courses/${course.id}`}
          >
            View
          </Button>
          <EditCourseModal course={course}/>
        </div>
      </Card.Content>
    </Card>
  </Grid.Column>
)

export default Course;
