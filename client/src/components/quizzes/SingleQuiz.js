import React, {Component} from 'react';
import { Header, Button, Segment, List, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuiz } from '../../actions/singleQuiz'
import { getQuestions } from '../../actions/quizQuestions'
import CreateQuestions from './CreateQuestions'
import axios from 'axios';
import moment from 'moment'

class SingleQuiz extends Component{
  state = { loaded: false };

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getQuiz(id))
    this.props.dispatch(getQuestions(id))
    this.loaded()
  }

  componentDidUpdate() {
    this.loaded()
  }

  loaded = () => {
    if (!this.state.loaded && this.props.quiz && this.props.questions)
      this.setState({ loaded: true })
  }

  deleteQuiz = () => {
    window.confirm("Delete Quiz?")
    axios.delete(`/api/quizzes/${this.state.quiz.id}`)
      .then( res => {
        this.props.history.push('./')
      })
      .catch( err => {
        console.log(err)
      });
  }

displayQuiz = () => {
  const { id, content, points, due_date, created_at, title } = this.props.quiz
  let time = moment(due_date).format('MMMM D, YYYY')
  let created = moment(created_at).format('MMMM D, YYYY')
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
      <Segment>
        <CreateQuestions quizId={id}/>
      </Segment>
      <Button basic color='red' name='delete' onClick={() => this.deleteQuiz(id)}>Delete</Button>
      <Link to={'./'} >
        <Button basic color='yellow'>Cancel</Button>
      </Link>
    </Segment>
  );
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
