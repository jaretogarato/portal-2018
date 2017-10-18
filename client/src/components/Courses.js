import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import CourseForm from './CourseForm';
import {
  Button,
  Card,
  Container,
  Grid,
  Menu,
  Segment,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getCourses } from '../actions/courses';

class Courses extends Component {
  state = {courses: [], isAdding: false}

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getCourses());
  }

  renderCourses = () => {
    const { courses } = this.props;
    if(courses) {
      return courses.map( course =>
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
                <Button basic color='green'>View</Button>
                <Button basic color='orange'>Edit</Button>
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    }
  }

  render() {
    const { isAdding } = this.state;
    return(
      <div>
        <Menu>
          <Menu.Item
            disabled={isAdding}
            name='Add Course'
            active={'nope' === 'editorials'}
            onClick={() => this.setState({isAdding: true})}
          />
          { isAdding &&
            <Menu.Item
              name='Cancel Create Course'
              active={'nope' === 'editorials'}
              onClick={() => this.setState({isAdding: false})}
            />
          }
        </Menu>
      { isAdding && <CourseForm cancelEdit={() => this.setState({isAdding: false})}/> }
      <Container>
        <Grid stackable columns='3'>
          { this.renderCourses() }
        </Grid>
      </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { courses: state.courses }
}

export default connect(mapStateToProps)(Courses);
