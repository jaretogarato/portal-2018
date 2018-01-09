import React from 'react'
import { Form } from 'semantic-ui-react'

class MultipleChoiceOption extends React.Component {
  state = { text: '', correct: false }

  handleChange = (_, { name, value } ) => this.setState({ [name]: value })

  handleCheck = () => this.setState({ correct: !this.state.correct })

  render() {
    return(
      <Form.Group>
        <Form.Input
          placeholder='Option Text'
          name='text'
          onChange={this.handleChange}
        />
        <Form.Checkbox name='correct' onChange={this.handleCheck}/>
      </Form.Group>
    )
  }
}

export default MultipleChoiceOption
