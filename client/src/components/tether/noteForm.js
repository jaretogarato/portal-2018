import React from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Button } from 'semantic-ui-react'
import { addNote } from '../../actions/notes'

class NoteForm extends React.Component {
  state = { title: '', content: '', visible: false, noteTime:false }

  handleSubmit = (e) => {
    const { userId } = this.props
    e.preventDefault();
    let { title, content, visible } = this.state
    let note = { title, content, visible }
    this.setState({ title: '', content: '', visible: false })
    this.props.dispatch(addNote(note, userId))

  }

  handleChecked = (e) => {
    this.setState({ visible: !this.state.visible })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  noteForm = () => {
    const { title, content } = this.state
    return(
      <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label='Title'
            name='title'
            value={title}
            width={7}
            placeholder='Note Title'
            required
            onChange={this.handleChange}
          />
          <Form.TextArea
            name='content'
            value={content}
            label='Content'
            placeholder='Leave a note.'
            required
            onChange={this.handleChange}
          />
          <Form.Checkbox
            label='Visible to everyone?'
            name='visible'
            onChange={this.handleChecked}
            checked={this.state.visible}
          />
          <Button type='submit'>Submit</Button>
        </Form>

      </Segment>
    )
  }



  render () {
    const { noteTime } = this.state

    return(
      <Segment basic>
        { noteTime ? this.noteForm()
          :
          <Button onClick={() => this.setState({noteTime: !noteTime})}>Add A Note</Button>
        }
      </Segment>
    )
  }
}

export default connect()(NoteForm);
