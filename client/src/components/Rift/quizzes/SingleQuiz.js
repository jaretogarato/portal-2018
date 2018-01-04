import React, {Component} from 'react';
import { Header, Container, Grid} from 'semantic-ui-react'
import axios from 'axios';

class SingleQuiz extends Component{
  state = { quiz: []}; 

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

render(){ 
  return(
    <Container> 
       <Header textAlign='center'> {this.state.quiz.title}  </Header> 
        <Grid>
        </Grid> 
      </Container> 
      )
    }
}


export default SingleQuiz;
