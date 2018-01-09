import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addOption, updateOption, deleteOption } from '../../actions/quizOptions'

class MultipleChoiceOption extends React.Component {
  state = { text: '', correct: false }

  componentDidMount() {
    const option = { id: this.props.id, text: '', correct: false }
    this.props.dispatch(addOption(option))
  }

  componentWillUnmount() {
    this.props.dispatch(deleteOption(this.props.id))
  }

  sendOption = () => {
    const { text, correct } = this.state
    const option = { id: this.props.id, text, correct }
    this.props.dispatch(updateOption(option))
  }

  handleChange = (_, { name, value } ) => {
    this.setState({ [name]: value }, this.sendOption)
  }
  handleCheck = () => {
    this.setState({ correct: !this.state.correct }, this.sendOption)
  }
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

export default connect()(MultipleChoiceOption)
