import React, { Component } from 'react';
import { Form, Button, TextArea, Container } from 'semantic-ui-react';
import { addQuiz } from '../../../actions/quizzes';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class QuizForm extends Component {
state = { title: '', description: ''}

handleSubmit = (e) => {
  e.preventDefault();
  const { title, description } = this.state;
  const { dispatch } = this.props;
  const quiz = { title, description};
  dispatch(addQuiz(quiz))
  this.setState({title: '', description: ''})
}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })


  render(){
    const { title, description } = this.state
    return(
      <Container> 
       <Form style={styles.form} onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input 
            name='title'
            value={title}  
            placeholder='Quiz Title' 
            autoFocus={true}
            onChange={this.handleChange}/>
        </Form.Group>
        <Form.TextArea
          name='description' 
          value={description}   
          onChange={this.handleChange}
          placeholder='Write Quiz Description/Instruction' />
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


