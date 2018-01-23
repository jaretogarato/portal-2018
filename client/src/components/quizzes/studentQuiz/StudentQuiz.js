import React from 'react';
import { connect } from 'react-redux';
import { getQuiz } from '../../../actions/singleQuiz';
import { getQuestions } from '../../../actions/quizQuestions';
import TakeQuiz from './TakeQuiz';
import GradedQuiz from './GradedQuiz';

class StudentQuiz extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getQuiz(id))
    this.props.dispatch(getQuestions(id))
  }

  render() {
    const graded = true
    if (graded)
      return <GradedQuiz />
    else
      return <TakeQuiz />
  }

}

export default connect()(StudentQuiz)
