import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Assignment from './assignments/Assignment';
import StudentAssignment from './assignments/studentAssignment/StudentAssignment';


const QuizRoute = ({ user }) => {
  if (user.is_admin)
    return (
      <ProtectedRoute path='/courses/:id/assignments/:id' component={Assignment} />
    )
  else
    return (
      <ProtectedRoute path='/courses/:id/assignments/:id' component={StudentAssignment} />
    )
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(AssignmentRoute)