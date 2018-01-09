import React, {Component} from 'react';
import { Header, Container, Grid, Button, Segment, Form, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 
import CreateQuestions from './CreateQuestions'
import axios from 'axios';
import moment from 'moment'

class SingleQuiz extends Component{
  state = { quiz: [] }; 

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/quizzes/${id}`)
      .then( res => {
        this.setState({ quiz: res.data});
      })
      .catch( err => {
        console.log(err);
    });
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

render(){ 
  const { id, deleteQuiz, content, points, due_date, created_at } = this.state.quiz
  let time = moment(due_date).format('MMMM D, YYYY')
  let created = moment(created_at).format('MMMM D, YYYY')
  return(
    <Segment basic>
       <Header textAlign='center'> {this.state.quiz.title}  </Header> 
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
        <Button basic color='red' name='delete' onClick={() => this.deleteQuiz(id)}> Delete </Button>
        <Link to={'./'} > 
          <Button basic color='yellow'> Cancel </Button> 
       </Link>
      </Segment>
      )
    }
}


export default SingleQuiz;
