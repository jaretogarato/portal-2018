import React, { Component } from 'react';
import { Form, Button, Container, Header, Divider } from 'semantic-ui-react';
import { addQuiz } from '../../actions/quizzes';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class QuizForm extends Component {
state = { title: '', content: '', due_date:'', points: '' }

handleSubmit = (e) => {
  const { history, dispatch } = this.props
  const { due_date, title, content, points } = this.state
  e.preventDefault();
  let quiz = { due_date: due_date, title: title, content: content, points: points }
  dispatch(addQuiz(quiz, history))
}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

 
  render(){
    const { title, content, due_date, points } = this.state
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
                name='points'
                value={points}
                type='number' 
                required 
                onChange={this.handleChange}
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
            <Form.Checkbox label='Published?' />
            <Divider />
            <Form.Group>
              <Button basic color='green' type='submit'>Create</Button> 
            <Link to={`./quizzes`} > 
              <Button basic color='yellow'> Cancel </Button> 
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
