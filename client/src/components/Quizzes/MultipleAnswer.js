import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';


class MultipleAnswer extends Component {
  state={ question: '' }


  handleQuestion = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  handleChange = (e) => {
    this.setState({ activeType: e.target.innerText })
  }
  
  render(){
    return ( 
    <Segment> 
        <Form onSubmit={this.handleSubmit}> 
        <Form.TextArea onChange={this.handleQuestion} name='question' value={this.state.question} label='Essay'> </Form.TextArea> 
        <Button type='submit'> save question </Button> 
        </Form>
      </Segment> 
    )
  }
}

export default MultipleAnswer;