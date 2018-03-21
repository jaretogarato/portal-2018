import React from 'react';
import styled from 'styled-components';
import {
  Form,
  Select,
  Segment,
  Button,
} from 'semantic-ui-react';
import MultipleChoiceOption from './MultipleChoiceOption';
import { addQuestion } from '../../actions/quizQuestions';
import { addUpdate, editUpdate } from '../../actions/questionUpdates';
import { connect } from 'react-redux';
import { PageSubTitle } from '../../styles/styledComponents';
import { stateFromHTML } from 'draft-js-import-html'
import { stateToHTML } from 'draft-js-export-html'
import DraftEditor from '../editor/DraftEditor'

const options = [
  { key: 2, text: 2, value: 2 },
  { key: 3, text: 3, value: 3 },
  { key: 4, text: 4, value: 4 },
  { key: 5, text: 5, value: 5 },
  { key: 6, text: 6, value: 6 },
  { key: 7, text: 7, value: 7 },
  { key: 8, text: 8, value: 8 }
]

const LabelGroup = styled(Segment)`
  display: flex;
  justify-content: space-between;
  width: 30%;
`

class MultipleChoiceQuestion extends React.Component {
  state = { question: '', optionCount: 0, options: {}, hasUpdate: false }

  componentDidMount() {
    const { quizOptions, text } = this.props
    let html = stateFromHTML(text);
    if (quizOptions)
      this.setState({ question: html, optionCount: quizOptions.length })
  }

  sendUpdate = () => {
    let { dispatch, editing, questionId } = this.props
    if (editing) {
      const question = { id: questionId, question: this.state.question, multiple_choice: true }
      if (!this.state.hasUpdate) {
        dispatch(addUpdate(question))
        this.setState({ hasUpdate: true })
      } else {
        dispatch(editUpdate(question))
      }
    }
  }

  handleChange = ( _, { name, value} ) => {
    this.setState({ [name]: value }, this.sendUpdate)
  }

  handleDraftChange = (content) => {
  const { dispatch, editing, questionId } = this.props
    this.setState({ question: content }, () => {
      if (editing) {
        const question = { id: questionId, question: this.state.question, multiple_choice: false }
        console.log(question);
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
    e.preventDefault()
    const { options, dispatch, quizId, hideForm } = this.props
    const { question } = this.state
    let multiple_correct = false
    let trues = 0
    options.forEach( o => {
      if (o.correct)
        trues++
      if (trues > 1)
        multiple_correct = true
    })
    const mcQuestion = { question, options, multiple_correct }
    dispatch(addQuestion(quizId, mcQuestion))
    hideForm()
  }

  optionGenerator = () => {
    const { optionCount } = this.state
    const { quizOptions, questionId } = this.props
    const countArray = new Array(optionCount)
    if (quizOptions)
      return quizOptions.map( op => {
        return (
          <MultipleChoiceOption
            key={op.id}
            questionId={questionId}
            id={op.id}
            option={op}
            sendUpdate={this.sendUpdate}
            editing={true}
          />
        )
      })
    else
      return Array.from(countArray).map( (_, i) => {
        return <MultipleChoiceOption id={i} key={i}/>
      })
  }

  render() {
    const { question, optionCount } = this.state
    const { text } = this.props;
    return (
     <Segment>
        <Form onSubmit={this.handleSubmit}>
          <PageSubTitle>Question Text</PageSubTitle>
            <DraftEditor dValue={stateFromHTML(text ? text : "")} onChange={this.handleDraftChange} contentChange={this.handleDraftChange} />
          { !this.props.editing &&
            <Form.Field
              control={Select}
              name='optionCount'
              label='Number of Options'
              options={ options }
              onChange={ this.handleChange }
              placeholder='Number of Options'
              required
            />
          }
          { optionCount > 0 &&
            <LabelGroup basic>
              <label>Option Text</label>
              <label>Correct</label>
            </LabelGroup>
          }
          {
            optionCount > 0 && this.optionGenerator()
          }
          { !this.props.editing && <Button basic type='submit'>Save</Button> }
        </Form>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { options: state.quizOptions }
}

export default connect(mapStateToProps)(MultipleChoiceQuestion)
