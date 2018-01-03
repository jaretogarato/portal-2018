import React from 'react';
import { setActiveCourse, clearActiveCourse } from '../actions/course';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CourseView from './course/CourseView';
import CourseSideNav from './tether/CourseSideNav';
import People from './tether/People';
import SectionSelect from './tether/SectionSelect'
import CourseSettings from './tether/CourseSettings';
import PeopleProfile from './tether/PeopleProfile';


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
      <div>
        <Route component={CourseSideNav} />
        <Route exact path="/courses/:id" component={CourseView} />
        <Route path="/courses/:id/people" component={People} />
        <Route path="/courses/:id/sections" component={SectionSelect} />
        <Route path="/courses/:id/settings" component={CourseSettings} />
        <Route path="/courses/:id/user/:id" component={PeopleProfile} />

      </div>
    )
  }
}

export default connect()(Course);
