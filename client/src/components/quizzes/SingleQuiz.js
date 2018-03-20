import React, {Component} from 'react';
import {
  Button,
  Segment,
  List,
  Dimmer,
  Loader,
  Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuiz, deleteQuiz } from '../../actions/singleQuiz';
import {
  getQuestions,
  deleteQuestion,
  updateQuestion,
} from '../../actions/quizQuestions';
import { clearUpdates } from '../../actions/questionUpdates';
import CreateQuestions from './CreateQuestions';
import EditQuizForm from './EditQuizForm';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import EssayQuestion from './EssayQuestion';
import TrueFalse from './TrueFalse';
import moment from 'moment';
import { PageTitle, PageSubTitle } from '../../styles/styledComponents';


class SingleQuiz extends Component{
  state = { loaded: false, quizEdit: false, questionsEdit: false };

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getQuiz(id))
    this.props.dispatch(getQuestions(id))
    this.checkLoaded()
  }

  componentDidUpdate() {
    this.checkLoaded()
  }

  checkLoaded = () => {
    if (!this.state.loaded && this.props.quiz && this.props.questions)
      this.setState({ loaded: true })
  }

  deleteQuiz = (id) => {
    const deleted = window.confirm("Delete Quiz?")
    if (deleted)
    this.props.dispatch(deleteQuiz(id, this.props.history ))
  }


  toggleEdit = () => {
    const { quizEdit } = this.state;
    this.setState({ quizEdit: !quizEdit })
  }

  toggleQuestionEdit = () => {
    const { questionsEdit } = this.state;
    this.setState({ questionsEdit: !questionsEdit })
    this.props.dispatch(clearUpdates())
  }

  updateQuestion = (question, type) => {
    let { dispatch, options, match: { params: { id }}} = this.props
    switch (type) {
      case 'essay':
      case 'trueFalse':
        dispatch(updateQuestion(id, question))
        break
      case 'multipleChoice':
        options = options.filter( o => o.questionId === question.id )
        let multiple_correct = false
        let trues = 0
        options.forEach( o => {
          if (o.correct)
            trues++
          if (trues > 1)
            multiple_correct = true
        })
        let mcQuestion = {...question, options, multiple_correct}
        dispatch(updateQuestion(id, mcQuestion))
        break
      default:
    }
    dispatch(clearUpdates())
    this.setState({ questionsEdit: false })
  }

  submitUpdates = () => {
    const { updates } = this.props
    updates.forEach( u => {
      if (u.multiple_choice)
        if (u.true_false)
          this.updateQuestion(u, 'trueFalse')
        else
          this.updateQuestion(u, 'multipleChoice')
      else
        this.updateQuestion(u, 'essay')
    })
  }

displayQuiz = () => {
  const { id, content, points, due_date, created_at, title } = this.props.quiz
  let time = moment(due_date).format('MMMM D, YYYY')
  let created = moment(created_at).format('MMMM D, YYYY')
  if(this.state.quizEdit) {
    return(
      <Segment basic>
        <EditQuizForm toggleEdit={this.toggleEdit}/>
      </Segment>
    )
  } else {
  return (
    <Segment basic clearing >
      <PageTitle>{title}</PageTitle>
      <Link to={'./'} >
        <Button basic floated='right'>View All Quizzes</Button>
      </Link>
      <Button basic floated='right' name='delete' onClick={() => this.deleteQuiz(id)}>Delete</Button>
      <Button basic floated='right' onClick={this.toggleEdit}>Edit</Button>
      <List>
        <List.Item>
          Description: <div dangerouslySetInnerHTML={{__html: content}} />
        </List.Item>
        <List.Item>
          Created: {created}
        </List.Item>
        <List.Item>
        Due Date: {time}
        </List.Item>
        <List.Item>
          Points: {points}
        </List.Item>
      </List>
      <Segment basic>
        <PageSubTitle>Quiz Questions</PageSubTitle>
        { this.props.questions.length &&
          <Button basic onClick={this.toggleQuestionEdit}>
            { this.state.questionsEdit ? 'Cancel Editing' : 'Edit Questions' }
          </Button>
        }
        { this.state.questionsEdit &&
          <Button basic onClick={this.submitUpdates}>Save Changes</Button>
        }
        {this.displayQuestions()}
        { this.props.questions.length > 3 &&
          <Button basic onClick={this.toggleQuestionEdit}>
            { this.state.questionsEdit ? 'Cancel Editing' : 'Edit Questions' }
          </Button>
        }
        { this.state.questionsEdit && this.props.questions.length > 3 &&
          <Button basic onClick={this.submitUpdates}>Save Changes</Button>
        }
        { !this.state.questionsEdit && <CreateQuestions quizId={id}/> }
      </Segment>
      <Divider />
      <Link to={'./'} >
        <Button basic>Save Quiz</Button>
      </Link>
    </Segment>
    );
  }
}

questionDelete = (quizId, questionId) => {
  let deleted = window.confirm('Are you sure?')
  if (deleted)
    this.props.dispatch(deleteQuestion(quizId, questionId))
}

displayQuestions= () => {
  const { questions } = this.props
  const { questionsEdit } = this.state
  if(questions.length > 0)
    return questions.map((q,i) => {
      if (!questionsEdit) {
          return(
          <Segment clearing key={q.id} >
           <div style={{paddingRight: '2%', display: 'inline-block'}}> {(i + 1)} </div>
            {q.question}
            { q.multiple_choice &&
              q.options.map((option, i) => {
                return(
                  <List.Item key={option.id} style={{paddingLeft: '5%'}}>
                  <div style={{paddingRight: '2%', display: 'inline-block'}}> {(i + 1)} </div>
                  <span style={ option.correct ? styles.correct : {} } > {option.content} </span>
                  </List.Item>
                  )
              })
            }
            <Button basic floated='right'
             onClick={() => this.questionDelete(this.props.quiz.id, q.id)} >
             Delete
             </Button>
          </Segment>
        )
      } else {
        if (q.multiple_choice)
          if (q.true_false)
            return <TrueFalse
              key={q.id}
              quizId={this.props.quiz.id}
              questionId={q.id}
              text={q.question}
              options={q.options}
              truth={q.options[0].correct ? 'true' : 'false'}
              editing={true}
            />
          else
            return <MultipleChoiceQuestion
              key={q.id}
              quizId={this.props.quiz.id}
              questionId={q.id}
              text={q.question}
              quizOptions={q.options}
              editing={true}
            />
        else
          return <EssayQuestion
            text={q.question}
            key={q.id}
            quizId={this.props.quiz.id}
            questionId={q.id}
            editing={true}
          />
      }
    })
  return null
}

  render() {
    const { loaded } = this.state
    if (loaded)
      return this.displayQuiz()
    else
      return(
        <Dimmer active>
          <Loader>Loading...</Loader>
        </Dimmer>
    )
  }
}


const styles = {
  correct: {
    fontWeight: 'bold',
    color: 'green',
  }
}


const mapStateToProps = (state) => {
  return {
    quiz: state.singleQuiz,
    questions: state.quizQuestions,
    updates: state.questionUpdates,
    options: state.quizOptions
  }
}

export default connect(mapStateToProps)(SingleQuiz);
