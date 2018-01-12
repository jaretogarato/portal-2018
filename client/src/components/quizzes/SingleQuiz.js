import React, {Component} from 'react';
import { Header, Button, Segment, List, Dimmer, Loader, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuiz } from '../../actions/singleQuiz'
import { getQuestions, deleteQuestion } from '../../actions/quizQuestions'
import CreateQuestions from './CreateQuestions'
import EditQuizForm from './EditQuizForm'
import axios from 'axios';
import moment from 'moment'

class SingleQuiz extends Component{
  state = { loaded: false, edit: false };

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

  deleteQuiz = () => {
    window.confirm("Delete Quiz?")
    axios.delete(`/api/quizzes/${this.props.quiz.id}`)
      .then( res => {
        this.props.history.push('./')
      })
      .catch( err => {
        console.log(err)
      });
  }

  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({ edit: !edit })
  }

displayQuiz = () => {
  const { id, content, points, due_date, created_at, title } = this.props.quiz
  let time = moment(due_date).format('MMMM D, YYYY')
  let created = moment(created_at).format('MMMM D, YYYY')
  if(this.state.edit) {
    return(
      <Segment basic>
        <Button basic onClick={this.toggleEdit}>
          Cancel Editing
        </Button>
        <EditQuizForm toggleEdit={this.toggleEdit}/>
      </Segment>
    )
  } else {
  return (
    <Segment basic clearing >
      <Header textAlign='center'>{title}</Header>
      <Link to={'./'} >
        <Button basic color='yellow' floated='right'>Cancel</Button>
      </Link>
      <Button basic floated='right' color='red' name='delete' onClick={() => this.deleteQuiz(id)}>Delete</Button>
      <Button basic color='blue' floated='right' onClick={this.toggleEdit }> Edit </Button> 
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
        {this.displayQuestions()}
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
  if(questions.length > 0)
    return questions.map((q,i) => {
      console.log(q.content)
      return(
        <Segment clearing key={q.id} > 
         <div style={{paddingRight: '2%', display: 'inline-block'}}> {(i + 1)} </div> 
          {q.question} 
          <Button basic floated='right' 
           onClick={() => this.props.dispatch(deleteQuestion(this.props.quiz.id, q.id))} > 
           Delete
           </Button>
        </Segment> 
      )
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

const mapStateToProps = (state) => {
  return { quiz: state.singleQuiz, questions: state.quizQuestions }
}

export default connect(mapStateToProps)(SingleQuiz);