import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import axios from 'axios'

class EssayQuestion extends Component {
  state={ question: '' }


  handleQuestion = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  handleChange = (e) => {
    this.setState({ activeType: e.target.innerText })
  }

  handleSubmit = (e) => {
    const id = this.props.quizId
    e.preventDefault();
    const { question } = this.state
    axios.post(`/api/quizzes/${id}/quiz_questions`, { question })
    .then( res => {
      console.log(res.data)
      // this.setState({ quiz_questions: res.data});
    })
    .catch( err => {
      console.log(err);
  });
  }
  
  render(){
    return ( 
    <Segment> 
        <Form onSubmit={this.handleSubmit}> 
        <Form.TextArea onChange={this.handleQuestion} name='question' value={this.state.question} label='Essay'> </Form.TextArea> 
        <Button basic type='submit'> save question </Button> 
        </Form>
      </Segment> 
    )
  }
}

export default EssayQuestion;
