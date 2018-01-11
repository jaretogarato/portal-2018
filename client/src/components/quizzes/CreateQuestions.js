import React, {Component} from 'react';
import { Segment, Form, Header, Button, Icon, Select } from 'semantic-ui-react';
import EssayQuestion from './EssayQuestion'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import TrueFalse from './TrueFalse'
import axios from 'axios';

const options = [
  { key: '1', text: 'Essay/Code', value: 'Essay/Code' },
  { key: '2', text: 'Multiple Choice', value: 'Multiple Choice' },
  { key: '3', text: 'Multiple Answer', value: 'Multiple Answer' },
  { key: '4', text: 'True/False', value: 'True/False' },
]


class CreateQuestions extends Component {
state = { showQuestion: false, activeType: '', question: '', options: [], isHidden: true }


  handleSubmit = (e) => {
    const id = this.props.quizId
    e.preventDefault();
    const { question } = this.state
    axios.post(`/api/quizzes/${id}/quiz_questions`, { question })
    .then( res => {
      console.log(res.data)
      // this.setState({ quiz_questions: res.data});
    })
    .catch( err => {
      console.log(err);
  });
  }

  handleChange = (_, { name, value }) => {
    this.setState({ [name]: value })
  }

  selectQuestion = () => {
    return(
      <Form.Group>
      <Form.Field
        name='activeType'
        control={Select}
        options={ options }
        onChange={ this.handleChange }
        placeholder='Question Type'
        required
        width={2}
      />
    </Form.Group>
    )
  }

  questionType = () => {
    const { activeType } = this.state
    switch(activeType) {
      case 'Essay/Code':
        return <EssayQuestion quizId={this.props.quizId} hideForm={this.hideForm}/>
      case 'Multiple Answer':
      case 'Multiple Choice':
        return <MultipleChoiceQuestion quizId={this.props.quizId} hideForm={this.hideForm}/>
      case 'True/False':
        return <TrueFalse quizId={this.props.quizId} hideForm={this.hideForm}/>;
      default:
        return null
    }
  }

  hideForm = () => this.setState({ showQuestion: false, isHidden: true, activeType: '' })

  render() {
    const { showQuestion } = this.state
    if (this.state.isHidden) {
      return(
        <Segment basic>
          <Header as="h3" textAlign='center'> Add Questions </Header>
          { showQuestion && this.selectQuestion() }
          { this.questionType() }
          <Button
            basic
            color='blue'
            icon
            labelPosition='left'
            onClick={() => this.setState({ showQuestion: true, isHidden: false })}
          >
            <Icon name='add' />
            New Question
          </Button>
        </Segment>
      )
    } else {
      return(
        <Segment basic>
          <Header as="h3" textAlign='center'> Add Questions </Header>
          { showQuestion && this.selectQuestion() }
          { this.questionType() }
          <Button
            basic
            color='red'
            onClick={this.hideForm}
          >
          Cancel
          </Button>
        </Segment>
      )
    }
  }
}


export default CreateQuestions;
