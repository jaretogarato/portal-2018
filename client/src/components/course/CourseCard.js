import React from 'react';
import EditCourseModal from './EditCourseModal';
import { Link } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';


const CourseCard = ({ course }) => (
  <Card className="ui centered card" style={{ borderRadius: '0px'}}>
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
      <Button.Group attached='bottom' style={{position: 'relative', zIndex: 0}}> 
      <Button
        style={{background: 'linear-gradient(#9575CD, #614D7B', color: 'white'}}
        as={Link}
        to={`/courses/${course.id}`}
      >
      View
      </Button>
      <EditCourseModal course={course} />
      </Button.Group>
      </div>
    </Card.Content>
  </Card>
)

export default CourseCard;
