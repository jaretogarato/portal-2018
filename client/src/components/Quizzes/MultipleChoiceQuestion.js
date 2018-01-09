import React from 'react'
import styled from 'styled-components'
import MultipleChoiceOption from './MultipleChoiceOption'
import { Form, Select, Segment, Header, Button } from 'semantic-ui-react'

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
    const { question, options } = this.state
  }

  handleCheck = (_, { thing, name } ) => {
    let correct = false
    let text = ''
    if (this.state.options[thing]) {
      correct = this.state.options[thing][name]
      text = this.state.options[thing]['text']
    }
    this.setState({
      options:
      {
        ...this.state.options,
        [thing]: { text: text, [name]: !correct }
      }
    })
  }

  optionGenerator = () => {
    const { optionCount } = this.state
    const countArray = new Array(optionCount)
    return Array.from(countArray).map( (_, i) => {
      return <MultipleChoiceOption key={i} />
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

export default MultipleChoiceQuestion
