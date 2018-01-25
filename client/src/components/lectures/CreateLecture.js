import React, { Component } from 'react';
import {
  Form,
  Button,
  Segment,
} from 'semantic-ui-react';
import { addLecture } from '../../actions/lectures';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PageTitle } from '../../styles/styledComponents';


const submissionOptions = [
  { key: '1', text: 'PLACEHOLDER', value: '1' },
]

class CreateLecture extends Component {
  state = { title: '', content: '' }

  handleSubmit = (e) => {
    const { history, dispatch } = this.props
    const { title, content } = this.state
    e.preventDefault();
    let lecture = { title, content }
    dispatch(addLecture(lecture, history))
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render(){
    const { title, content } = this.state
    return(
      <Segment basic>
        <PageTitle>Create Lecture</PageTitle>
        <Segment> 
          <Form onSubmit={this.handleSubmit} style={styles.form}>
            <Form.Group widths='equal'>
              <Form.Input 
                label='Title'
                name='title'
                value={title}  
                width={9}
                placeholder='Lecture Title' 
                autoFocus={true}
                required
                onChange={this.handleChange}>
              </Form.Input>
              <Form.Select 
                label='Sub-section group' 
                options={ submissionOptions } 
                placeholder='Sub-section groups' 
                required 
                width={2} 
              />
            </Form.Group>
            <Form.TextArea 
              name='content'
              value={content}
              style={ styles.textArea }
              label='Content' 
              placeholder='Rift Text Editor Placeholder' 
              required 
              onChange={this.handleChange}
            />
            <Form.Checkbox label='Published?' />
            <Form.Group>
              <Button basic type='submit'>Create</Button> 
              <Link to={'./lectures'}>
                <Button basic onClick={this.props.history.goBack}>Cancel</Button> 
              </Link>
            </Form.Group>
          </Form> 
        </Segment>
      </Segment> 
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


export default connect()(CreateLecture);