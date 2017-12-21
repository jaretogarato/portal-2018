import React from 'react';
import { setActiveCourse, clearActiveCourse } from '../actions/course';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import CourseView from './course/CourseView';
import CourseSideNav from './CourseSideNav';
import People from './People';
import SectionSelect from './SectionSelect'

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
      </div>
    )
  }
}

export default connect()(Course);
