import React from 'react';
import { Card } from 'semantic-ui-react';

const Course = ({ course: { id, course_type, term, year } }) => (
    <Card>
      <Card.Content>
        <h1>{term}</h1>
        <h1>{course_type}</h1>
        <h1>{year}</h1>
      </Card.Content>
    </Card>
)

export default Course;