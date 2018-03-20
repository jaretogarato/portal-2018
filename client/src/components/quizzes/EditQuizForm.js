import React, { Component } from 'react';
import {
  Form,
  Button,
  Container,
  Divider,
} from 'semantic-ui-react';
import { updateQuiz, getQuiz } from '../../actions/singleQuiz';
import { connect } from 'react-redux';
import { PageTitle } from '../../styles/styledComponents';
import { stateFromHTML } from 'draft-js-import-html';
import { stateToHTML } from 'draft-js-export-html'
import RiftEditor from '../Rift/riftEditor/RiftEditor';

class EditQuizForm extends Component {
state = { title: '', content: '', due_date:'', points: '' }

componentDidMount() {
  const { id, title, content, due_date, points } = this.props.quiz
  this.props.dispatch(getQuiz(id))
  this.setState({ title, content, due_date, points })
}

handleSubmit = (e) => {
  e.preventDefault();
  const { due_date, title, content, points } = this.state
  this.props.dispatch(updateQuiz({ due_date, title, content, points }, this.props.quiz.id))
  this.props.toggleEdit();
}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  contentChange = (content) => {
    this.setState({ content })
  }

  render(){
    const { title, content, due_date, points } = this.props.quiz
    return(
      <Container>
        <PageTitle>Update Quiz</PageTitle>
          <Form onSubmit={this.handleSubmit} style={styles.form}>
            <Form.Group widths='equal'>
              <Form.Input
                label='Title'
                name='title'
                defaultValue={title}
                width={9}
                placeholder='Quiz Title'
                autoFocus={true}
                required
                onChange={this.handleChange}>
              </Form.Input>
              <Form.Input
                name='due_date'
                defaultValue={due_date}
                label='Due Date'
                type='date'
                width={4}
                onChange={this.handleChange}
                 >
              </Form.Input>
              <Form.Input
                label='Points'
                placeholder='Points'
                name='points'
                defaultValue={points}
                type='number'
                required
                onChange={this.handleChange}
                width={3} />
            </Form.Group>
            <RiftEditor dValue={stateFromHTML(content)} contentChange={this.contentChange} />
            <Divider />
            <Form.Checkbox label='Published?' />
            <Divider />
            <Form.Group>
            <Button basic type='submit'>Update</Button>
            <Button basic onClick={this.props.toggleEdit}>
                Cancel Editing
            </Button>
            </Form.Group>
          </Form>
      </Container>
    )
  }
}

const styles = {
  form: {
    paddingTop: '2%',
  },
  textArea: {
    minHeight: '150px',
  },
}

const mapStateToProps = (state) => {
  return { quiz: state.singleQuiz }
}


export default connect(mapStateToProps)(EditQuizForm);
