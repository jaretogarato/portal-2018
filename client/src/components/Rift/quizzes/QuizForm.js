import React, { Component } from 'react';
import { Form, Button, Container, Header, Divider } from 'semantic-ui-react';
import { addQuiz } from '../../../actions/quizzes';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateQuestions from './CreateQuestions'

const submissionOptions = [
  { key: '1', text: 'No Submission', value: '1' },
  { key: '2', text: 'Online', value: '2' },
  { key: '3', text: 'On Paper', value: '3' },
  { key: '4', text: 'External', value: '4' },
]

class QuizForm extends Component {
state = { title: '', content: '', due_date:''}

handleSubmit = (e) => {
  const { history, dispatch } = this.props
  e.preventDefault();
  let quiz = { due_date: this.state.due_date, title: this.state.title, content: this.state.content}
  dispatch(addQuiz(quiz, history))
}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

 
  render(){
    const { title, content, due_date } = this.state
    return(
      <Container> 
        <Header as="h3" textAlign='center' style={styles.pageTitle}>Create Quiz</Header>
          <Form onSubmit={this.handleSubmit} style={styles.form}>
            <Form.Group widths='equal'>
              <Form.Input 
                label='Title'
                name='title'
                value={title}  
                width={9}
                placeholder='Quiz Title' 
                autoFocus={true}
                required
                onChange={this.handleChange}>
              </Form.Input>
              <Form.Select 
                label='Submission Options' 
                options={ submissionOptions } 
                placeholder='Submission Options' 
                required 
                width={2} 
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input 
                name='due_date'
                value={due_date}
                label='Due Date' 
                type='date' 
                width={9}
                onChange={this.handleChange}
                 >
              </Form.Input>
              <Form.Input 
                label='Points'
                placeholder='Points' 
                type='number' 
                required 
                width={2} />
            </Form.Group>
            <Form.TextArea 
              name='content'
              value={content}
              style={ styles.textArea }
              label='Description' 
              placeholder='Rift Text Editor Placeholder' 
              required 
              onChange={this.handleChange}
              />
             <Divider />
              <CreateQuestions /> 
            <Form.Checkbox label='Published?' />
            <Divider />
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
  },
  pageTitle: {
    paddingTop: '2%',
  },
  textArea: {
    minHeight: '150px',
  },
}


export default connect()(QuizForm);
