import React, { Component } from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import { addQuiz } from '../../../actions/quizzes';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class QuizForm extends Component {
state = { title: '', content: ''}

handleSubmit = (e) => {
  e.preventDefault();
  let quiz = { title: this.state.title, content: this.state.content }
  this.props.dispatch(addQuiz(quiz))
  this.props.history.push('/quizzes')
}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

 
  render(){
    const { title, content } = this.state
    return(
      <Container> 
       <Form onSubmit={this.handleSubmit} style={styles.form}>
        <Form.Group widths='equal'>
          <Form.Input 
            required='true'
            name='title'
            value={title}  
            placeholder='Quiz Title' 
            autoFocus={true}
            onChange={this.handleChange}>
          </Form.Input>
        </Form.Group>
          <Form.TextArea
            required='true'
            name='content' 
            value={content}   
            onChange={this.handleChange}
            placeholder='Write Quiz Description/Instruction'>
          </Form.TextArea>
        <Form.Group>
        <Button type='submit'> Create </Button> 
        <Link to={'./quizzes'} > 
        <Button> Cancel </Button> 
        </Link>
        </Form.Group>
       </Form> 
      </Container> 
    )
  }
}

const styles = {
  form: {
    paddingTop: '2%',
  }
}


export default connect()(QuizForm);


