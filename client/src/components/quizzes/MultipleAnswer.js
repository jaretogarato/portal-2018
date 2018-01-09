import React from 'react'
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

class MultipleAnswer extends React.Component {
  state = { question: '', optionCount: 0, options: {} }

  handleChange = ( _, { name, value} ) => {
    this.setState({ [name]: value })
  }

  handleOptionChange = (_, { thing, name, value } ) => {
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
        [thing]: { [name]: value, correct }
      }
    })
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
    let optionForms = []
    for (let i = 0; i < optionCount; i++ ) {
      optionForms.push(
        <Form.Group key={i}>
          <Form.Input
            placeholder='Option Text'
            name='text'
            thing={i}
            onChange={this.handleOptionChange}
          />
          <Form.Checkbox thing={i} name='correct' onChange={this.handleCheck}/>
        </Form.Group>
      )
    }
    return optionForms.map( o => { return o } )
  }

  render() {
    const { question, optionCount } = this.state
    return (
     <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Header as='h3'>Question Text</Header>
          <Form.TextArea
            onChange={this.handleQuestion}
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
          {
            optionCount > 0 && this.optionGenerator()
          }
          <Button basic type='submit'>Save</Button>
        </Form>
      </Segment>
    )
  }
}

export default MultipleAnswer
