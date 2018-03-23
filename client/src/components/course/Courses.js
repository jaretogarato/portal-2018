import React from 'react';
import CourseCard from './CourseCard';
import CourseForm from './CourseForm';
import { connect } from 'react-redux';
import { getCourses } from '../../actions/courses';
import {
  Container,
  Menu,
  Card,
  Button,
  Divider,
  Modal
} from 'semantic-ui-react';
import { HomeBody, HomeWrapper } from '../../styles/home-images.js';


class Courses extends React.Component {
  state = {
    courses: [],
    modalOpen: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCourses());
  }

  toggleModal = (e) => {
    const { modalOpen } = this.state
    this.setState({ modalOpen: !modalOpen })
  }

  renderCourses = () => {
    const { courses } = this.props;
    if(courses) {
      return courses.map( course =>
        <CourseCard key={ course.id } course={ course } />
      )
    }
  }

  render() {
    const { modalOpen, loaded } = this.state;
      return (
        <HomeBody style={{paddingTop: '80px'}}>
          <HomeWrapper style={ styles.scrollable_section }>
            <Container>
              <Button onClick={ () => this.toggleModal() }>Add Course</Button>
              <Divider />
              <Card.Group stackable columns='3'>
                { this.renderCourses() }
              </Card.Group>
              { modalOpen && 
              <Modal
                open={ modalOpen }
                onClose={() => this.toggleModal()}
                >
                <CourseForm cancelAdding={ () => this.setState({ modalOpen: false }) } /> 
              </Modal> }
            </Container>
          </HomeWrapper>
        </HomeBody>
      )
    } 
}

const styles = {
  scrollable_section: {
    maxHeight: '100vh',
    overflowY: 'scroll',
    padding: '2%',
  },
}

const mapStateToProps = (state) => {
  return { courses: state.courses }
}

export default connect(mapStateToProps)(Courses);
