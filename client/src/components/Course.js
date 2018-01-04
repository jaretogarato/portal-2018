import React from 'react';
import { setActiveCourse, clearActiveCourse } from '../actions/course';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CourseSideNav from './tether/CourseSideNav';
import People from './tether/People';
import SectionSelect from './tether/SectionSelect'
import CourseSettings from './tether/CourseSettings';
import PeopleProfile from './tether/PeopleProfile';
import SectionShow from './tether/SectionShow';
import { Container, Grid, Segment } from 'semantic-ui-react';


class Course extends React.Component {
  componentDidMount() {
    const { match: { params: { id }}, dispatch } = this.props;
    dispatch(setActiveCourse(id))
  }

  componentWillUnmount() {
    this.props.dispatch(clearActiveCourse())
  }

  render() {
    return (
      <Segment basic>
        <Container fluid style={styles.noBorder}>
          <Grid style={styles.noBorder}>
            <Grid.Column width={3}>
              <Segment style={styles.sideBar}>
                <Route component={CourseSideNav} />
              </Segment>
            </Grid.Column>
            <Grid.Column width={13}>
              <Segment>
                <Route exact path="/courses/:id" component={SectionShow} />
                <Route path="/courses/:id/people" component={People} />
                <Route path="/courses/:id/sections" component={SectionSelect} />
                <Route path="/courses/:id/settings" component={CourseSettings} />
                <Route path="/courses/:id/user/:id" component={PeopleProfile} />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

const styles = {
  noBorder: {
    border:'none',
  },

  sideBar: {
    height: "65vh",
    width: '11em',
  }
}

export default connect()(Course);