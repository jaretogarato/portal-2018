import React, {Component} from 'react';
import { Segment, Form, Header } from 'semantic-ui-react';

const questionType = [
  { key: '1', text: 'Open Ended', value: '1' },
  { key: '2', text: 'Multiple Choice', value: '2' },
  { key: '3', text: 'True/False', value: '3' },
  { key: '4', text: 'Code', value: '4' },
]

class CreateQuestions extends Component {

  render() {
    return(
    <Segment basic> 
    <Header as="h3" textAlign='center'>Add Questions</Header>
    <Form.Group> 
      <Form.Select 
      label='Question Types' 
      options={ questionType } 
      placeholder='Question Types' 
      required 
      width={2} 
      />
    </Form.Group> 
    </Segment> 
    )
  }
} 


export default CreateQuestions; 