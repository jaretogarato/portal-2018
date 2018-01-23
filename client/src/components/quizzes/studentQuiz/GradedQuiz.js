import React from 'react'
import { connect } from 'react-redux'

const GradedQuiz = ({ questions }) => {
  return <h1>Graded Quiz</h1>
}

const mapStateToProps = (state) => {
  return { questions: state.quizQuestions }
}

export default connect(mapStateToProps)(GradedQuiz)
