import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addOption, updateOption, deleteOption } from '../../actions/quizOptions'

class MultipleChoiceOption extends React.Component {
  state = { text: '', correct: false }

  componentDidMount() {
    let { option } = this.props
    if (!option)
      option = { id: this.props.id, text: '', correct: false }
    else
      option = { questionId: this.props.questionId, ...option }
    this.props.dispatch(addOption(option))
    if (option)
      this.setState({ text: option.content, correct: option.correct })
  }

  componentWillUnmount() {
    this.props.dispatch(deleteOption(this.props.id))
  }

  sendOption = () => {
    const { text, correct } = this.state
    const { questionId } = this.props
    const option = { questionId, id: this.props.id, text, correct }
    this.props.dispatch(updateOption(option))
  }

  handleChange = (_, { name, value } ) => {
    this.setState({ [name]: value }, this.sendOption)
  }
  handleCheck = () => {
    this.setState({ correct: !this.state.correct }, this.sendOption)
  }
  render() {
    const { text } = this.state
    return(
      <Form.Group>
        <Form.Input
          placeholder='Option Text'
          value={text}
          name='text'
          onChange={this.handleChange}
        />
        <Form.Checkbox name='correct' onChange={this.handleCheck} checked={this.state.correct}/>
      </Form.Group>
    )
  }
}

export default connect()(MultipleChoiceOption)
