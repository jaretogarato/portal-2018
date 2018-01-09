import React, {Component} from 'react';
import { Header, Button, Segment, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

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
    debugger
    axios.delete(`/api/quizzes/${this.state.quiz.id}`)
      .then( res => {
        this.props.history.push('./')
      })
      .catch( err => {
        console.log(err)
      });
  }

render(){ 
  const { id } = this.state.quiz
  return(
    <Segment basic>
       <Header textAlign='center'> {this.state.quiz.title}  </Header> 
        <Form>
          <Form.Group> 
            
              {this.state.quiz.content}
          </Form.Group>
        </Form> 
        <Button name='delete' onClick={() => this.deleteQuiz(id)}> Delete </Button>
        <Link to={'./quizform'} > 
          <Button> Edit </Button> 
       </Link>
        <Link to={'./'} > 
          <Button> Cancel </Button> 
       </Link>
      </Segment>
      )
    }
}


export default SingleQuiz;
