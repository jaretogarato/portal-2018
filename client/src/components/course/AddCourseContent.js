import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

class AddCourseContent extends React.Component {

  state = { quizzes: [], showForm: false }

  componentDidMount() {
    const { id, content, quizzes } = this.props
    const filteredQuizzes = []
    content.filter( content => {
      return content.sub_section_id === id 
    }).map( content => {
      quizzes.map( quiz => {
        if( quiz.id === content.quiz_id )
        filteredQuizzes.push(quiz)
      })
    })
    this.setState({ quizzes: [...filteredQuizzes], showForm: true })
  }

  render() {
    return(
      <Button content="Log Options" onClick={() => console.log(this.state.quizzes)}/>
    )
  }

}

const mapStateToProps = (state) => {
  return { content: state.courseContent, quizzes: state.quizzes }
}

export default connect(mapStateToProps)(AddCourseContent);