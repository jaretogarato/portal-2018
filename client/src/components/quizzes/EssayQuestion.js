import React, { Component } from 'react';
import {
  Segment,
  Form,
  Button,
} from 'semantic-ui-react';
import { addQuestion } from '../../actions/quizQuestions';
import { addUpdate, editUpdate } from '../../actions/questionUpdates';
import { connect } from 'react-redux';
import { stateFromHTML } from 'draft-js-import-html'



class EssayQuestion extends Component {
  state = { question: '', hasUpdate: false }

  componentDidMount() {
    const { editing, text } = this.props
    if (editing)
      this.setState({ question: text })
  }

  handleChange = (e, {name, value}) => {
  const { dispatch, editing, questionId } = this.props
    this.setState({ [name]: value }, () => {
      if (editing) {
        const question = { id: questionId, question: this.state.question, multiple_choice: false }
        if (!this.state.hasUpdate) {
          dispatch(addUpdate(question))
          this.setState({ hasUpdate: true })
        } else {
          dispatch(editUpdate(question))
        }
      }
    })
  }

  handleSubmit = (e) => {
    const { quizId, dispatch, hideForm } = this.props
    e.preventDefault();
    const { question } = this.state
    const quizQuestion = { question, multiple_choice: false }
    dispatch(addQuestion(quizId, quizQuestion))
    hideForm()
  }

  contentChange = (question) => {
    this.setState({ question })
  }

  render(){
    return (
    <Segment>
        <Form onSubmit={this.handleSubmit}>
        <Form.TextArea onChange={this.handleChange} name='question' value={this.state.question} label='Question'> </Form.TextArea>
        <RiftEditor dValue={this.state.question} name='question' onChange={this.handleChange} contentChange={this.contentChange} label='Question' />
        { !this.props.editing && <Button basic type='submit'> save question </Button> }
        </Form>
      </Segment>
    )
  }
}

export default connect()(EssayQuestion);
