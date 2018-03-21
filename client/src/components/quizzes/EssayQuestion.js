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
import { stateToHTML } from 'draft-js-export-html'
import DraftEditor from '../editor/DraftEditor'
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw
} from 'draft-js';



class EssayQuestion extends Component {
  state = { question: '', hasUpdate: false, editorState: EditorState.createEmpty()};

  componentDidMount() {
    const { editing, text } = this.props
    let html = stateFromHTML(text);
    if (text){
      this.setState({
        question: html
      })
    }
  }

  handleChange = (content) => {
  const { dispatch, editing, questionId, dValue } = this.props
    this.setState({ question: content }, () => {
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
    const { quizId, dispatch, hideForm, name, value } = this.props
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
    const { text } = this.props;
    return (
    <Segment>
        <Form onSubmit={this.handleSubmit}>
        <DraftEditor dValue={stateFromHTML(text ? text : "")} onChange={this.handleChange} contentChange={this.handleChange} />
          { !this.props.editing && <Button basic type='submit'> save question </Button> }
        </Form>
      </Segment>
    )
  }
}

export default connect()(EssayQuestion);
