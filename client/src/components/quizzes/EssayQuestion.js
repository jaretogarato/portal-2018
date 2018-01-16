import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { addQuestion } from '../../actions/quizQuestions';
import { connect } from 'react-redux';


class EssayQuestion extends Component {
  state = { question: '' }

  componentDidMount() {
    const { editing, text } = this.props
    if (editing)
      this.setState({ question: text })
  }

  handleQuestion = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  handleChange = (e) => {
    this.setState({ activeType: e.target.innerText })
  }

  handleSubmit = (e) => {
    const { quizId, dispatch, hideForm } = this.props
    e.preventDefault();
    const { question } = this.state
    const quizQuestion = { question, multiple_choice: false }
    dispatch(addQuestion(quizId, quizQuestion))
    hideForm()
  }

  render(){
    return (
    <Segment>
        <Form onSubmit={this.handleSubmit}>
        <Form.TextArea onChange={this.handleQuestion} name='question' value={this.state.question} label='Question'> </Form.TextArea>
        { !this.props.editing && <Button basic type='submit'> save question </Button> }
        </Form>
      </Segment>
    )
  }
}

export default connect()(EssayQuestion);
