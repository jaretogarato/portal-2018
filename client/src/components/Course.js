import React from 'react';
import axios from 'axios';
import { setHeaders } from '../actions/headers';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import CourseView from './course/CourseView';
import CourseSideNav from './CourseSideNav';
import People from './People';

class Course extends React.Component {
  state = { course: {} }

  componentDidMount() {
    axios.get(`/api/courses/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ course: res.data });
        this.props.dispatch(setHeaders(res.headers));
      })
  }

  render() {
    return (
      <div>
        <Route component={CourseSideNav} />
        <Route exact path="/courses/:id" component={CourseView} />
        <Route path="/courses/:id/people" component={People} />
      </div>
    )
  }
}

export default connect()(Course);
