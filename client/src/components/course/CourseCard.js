import React from 'react';
import EditCourseModal from './EditCourseModal';
import { Link } from 'react-router-dom'
import { Button, Card, Grid } from 'semantic-ui-react';

const CourseCard = ({ course }) => (
  <Grid.Column key={course.id}>
    <Card style={{ borderRadius: '0px'}}>
      <Card.Content as={Link} to={`/courses/${course.id}`}>
        <Card.Header>
          {course.course_type}
        </Card.Header>
        <Card.Meta>
          {course.term} {course.year}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Button
            basic
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

export default CourseCard;
