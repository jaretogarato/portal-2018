import React, {Component} from 'react';
import { Segment, Form, Header, Button, Icon, Select } from 'semantic-ui-react';
import EssayQuestion from './EssayQuestion'
import MultipleAnswer from './MultipleAnswer'
import TrueFalse from './TrueFalse'
import axios from 'axios';

const options = [
  { key: '1', text: 'Essay/Code', value: '1' },
  { key: '2', text: 'Multiple Choice', value: '2' },
  { key: '3', text: 'Multiple Answer', value: '3' },
  { key: '4', text: 'True/False', value: '4' },
]


class CreateQuestions extends Component {
state = { showQuestion: false, activeType: '', question: '', options: [] }

  
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

  handleQuestion = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  handleChange = (e) => {
    this.setState({ activeType: e.target.innerText })
  }

  selectQuestion = () => {
    return(
      <Form.Group>
      <Form.Field
      control={Select}
      label='Question Types'
      options={ options }
      onChange={ this.handleChange }
      placeholder='Question Types'
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
        return <EssayQuestion />
      case 'Multiple Choice':
        return this.multipleChoice();
      case 'Multiple Answer':
        return <MultipleAnswer />
      case 'True/False':
        return <TrueFalse />;
      default:
        return null
    }
  }

  render() {
    const { showQuestion } = this.state
    return(
      <Segment basic>
      <Header as="h3" textAlign='center'> Add Questions </Header>
      <Button
          basic
          color='blue'
          icon
          labelPosition='left'
          onClick={() => this.setState({ showQuestion: true })}>
        <Icon name='add' />
        New Question
      </Button>
      { showQuestion && this.selectQuestion() }
      { this.questionType() }
      </Segment>
    )
  }
}


export default CreateQuestions;
