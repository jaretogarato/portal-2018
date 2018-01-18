import React, {Component} from 'react';
import { Header, Button, Segment, List, Dimmer, Loader, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuiz, deleteQuiz } from '../../actions/singleQuiz';
import { getQuestions, deleteQuestion } from '../../actions/quizQuestions';
import CreateQuestions from './CreateQuestions';
import EditQuizForm from './EditQuizForm';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import EssayQuestion from './EssayQuestion';
import TrueFalse from './TrueFalse';
import moment from 'moment';
import { stateFromHTML } from 'draft-js-import-html';
import { EditorState, ContentState, convertFromRaw } from 'draft-js';


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
  }

  displayQuiz = () => {
    // const contentState = convertFromRaw( JSON.parse( this.props.quiz) );
  
  // if(this.props.quiz.content){
  //   let qz = this.props.quiz.content
  //   let json = JSON.parse(qz) 
  //   const contentState = convertFromRaw(json)
  // }
 
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
      <Header textAlign='center'>{title}</Header>
      <Link to={'./'} >
        <Button basic color='yellow' floated='right'>All Quizzes</Button>
      </Link>
      <Button basic floated='right' color='red' name='delete' onClick={() => this.deleteQuiz(id)}>Delete</Button>
      <Button basic color='blue' floated='right' onClick={this.toggleEdit}> Edit </Button>
      <List>
        <List.Item>
          Description: {content}
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
        <Header textAlign='center'>Quiz Questions</Header>
        <Button basic primary onClick={this.toggleQuestionEdit}>
          { this.state.questionsEdit ? 'Cancel Editing' : 'Edit Questions' }
        </Button>
        {this.displayQuestions()}
        <Button basic primary onClick={this.toggleQuestionEdit}>
          { this.state.questionsEdit ? 'Cancel Editing' : 'Edit Questions' }
        </Button>
        <CreateQuestions quizId={id}/>
      </Segment>
      <Divider />
      <Link to={'./'} >
        <Button basic color='green'>Save Quiz</Button>
      </Link>
        </Segment>
  );
}
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
             onClick={() => this.props.dispatch(deleteQuestion(this.props.quiz.id, q.id))} >
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
  return { quiz: state.singleQuiz, questions: state.quizQuestions, updates: state.questionUpdates }
}

export default connect(mapStateToProps)(SingleQuiz);
