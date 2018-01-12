import React, {Component} from 'react';
import { Header, Button, Segment, List, Dimmer, Loader, Input, Icon } from 'semantic-ui-react';
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
    <Segment basic>
      <Header textAlign='center'>{title}</Header>
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
        {this.displayQuestions()}
      </Segment>
      <Segment>
        <CreateQuestions quizId={id}/>
      </Segment>
      <Button basic color='red' name='delete' onClick={() => this.deleteQuiz(id)}>Delete</Button>
        <Button basic color='blue' onClick={this.toggleEdit }> Edit </Button> 
      <Link to={'./'} >
        <Button basic color='yellow'>Cancel</Button>
      </Link>
    </Segment>
  );
}
}

displayQuestions= () => {
  const { questions } = this.props
  let quizNumber = 1
  if(questions.length > 0)
    return questions.map((q,i) => {
      return(
        <Segment key={q.id} > 
          {(i + 1)} 
          {q.question} 
          <Icon link name='delete' textAlign='right'
           onClick={() => this.props.dispatch(deleteQuestion(this.props.quiz.id, q.id))} />
        </Segment> 
      )
      quizNumber++
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