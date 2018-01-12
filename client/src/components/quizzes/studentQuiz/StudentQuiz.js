import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EssayQuestion from './EssayQuestion';
import MultipleChoice from './MultipleChoice';
import MultipleAnswer from './MultipleAnswer';
import TrueFalse from './TrueFalse';
import { getQuiz } from '../../../actions/singleQuiz';
import { getQuestions } from '../../../actions/quizQuestions';

class StudentQuiz extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getQuiz(id))
    this.props.dispatch(getQuestions(id))
  }

  displayQuestions = () => {
    const { questions } = this.props
    return questions.map( q => {
      if(q.multiple_choice) {
        if(q.true_false) {
          return <TrueFalse key={q.id} question={q}/>
        } else if(q.multiple_correct) {
          return <MultipleAnswer key={q.id} question={q}/>
        } else {
          return <MultipleChoice key={q.id} question={q}/>
        }
      } else {
        return <EssayQuestion key={q.id} question={q}/>
      }
    })
  }

  render() {
    const { quiz } = this.props
    return(
      <Segment basic>
        <Header as ='h2' textAlign='center'>{quiz.title}</Header>
        {this.displayQuestions()}
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { quiz: state.singleQuiz, questions: state.quizQuestions }
}

export default connect(mapStateToProps)(StudentQuiz)
