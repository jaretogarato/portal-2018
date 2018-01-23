import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleQuiz from './quizzes/SingleQuiz';
import StudentQuiz from './quizzes/studentQuiz/StudentQuiz';

const QuizRoute = ({ user }) => {
  if (user.is_admin)
    return (
      <Route path='/courses/:id/quizzes/:id' component={SingleQuiz} />
    )
  else
    return (
      <Route path='/courses/:id/quizzes/:id' component={StudentQuiz} />
    )
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(QuizRoute)
