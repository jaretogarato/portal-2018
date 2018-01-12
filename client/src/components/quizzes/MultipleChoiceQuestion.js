import React from 'react'
import styled from 'styled-components'
import { Form, Select, Segment, Header, Button } from 'semantic-ui-react'
import MultipleChoiceOption from './MultipleChoiceOption'
import { addQuestion } from '../../actions/quizQuestions'
import { connect } from 'react-redux'

const options = [
  { key: 2, text: 2, value: 2 },
  { key: 3, text: 3, value: 3 },
  { key: 4, text: 4, value: 4 },
  { key: 5, text: 5, value: 5 },
  { key: 6, text: 6, value: 6 },
  { key: 7, text: 7, value: 7 },
  { key: 8, text: 8, value: 8 }
]

const LabelGroup = styled(Segment) `
  display: flex;
  justify-content: space-between;
  width: 30%;
`

class MultipleChoiceQuestion extends React.Component {
  state = { question: '', optionCount: 0, options: {} }

  handleChange = ( _, { name, value} ) => {
    this.setState({ [name]: value })
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
    const countArray = new Array(optionCount)
    return Array.from(countArray).map( (_, i) => {
      return <MultipleChoiceOption id={i} key={i}/>
    })
  }

  render() {
    const { question, optionCount } = this.state
    return (
     <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Header as='h3'>Question Text</Header>
          <Form.TextArea
            name='question'
            value={question}
            onChange={this.handleChange}
            required
          />
          <Form.Field
            control={Select}
            name='optionCount'
            label='Number of Options'
            options={ options }
            onChange={ this.handleChange }
            placeholder='Number of Options'
            required
          />
          { optionCount > 0 &&
            <LabelGroup basic>
              <label>Option Text</label>
              <label>Correct</label>
            </LabelGroup>
          }
          {
            optionCount > 0 && this.optionGenerator()
          }
          <Button type='submit'>Save</Button>
        </Form>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { options: state.quizOptions }
}

export default connect(mapStateToProps)(MultipleChoiceQuestion)
