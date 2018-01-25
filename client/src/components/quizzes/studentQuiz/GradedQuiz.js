import React from 'react';
import { connect } from 'react-redux';
import { PageTitle } from '../../../styles/styledComponents';


const GradedQuiz = ({ questions }) => {
  return <PageTitle>Graded Quiz</PageTitle>
}

const mapStateToProps = (state) => {
  return { questions: state.quizQuestions }
}

export default connect(mapStateToProps)(GradedQuiz)
