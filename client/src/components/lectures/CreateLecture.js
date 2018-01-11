import React, { Component } from 'react';
import { Form, Button, Header, Segment, Divider } from 'semantic-ui-react';
import { addLecture } from '../../actions/lectures';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
        <Header as='h1' textAlign='center' style={styles.pageTitle}>Create Lecture</Header>
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
            <Divider />
            <Form.Group>
              <Button basic color='green' type='submit'>Create</Button> 
              <Link to={'./lectures'}>
                <Button onClick={this.props.history.goBack}>Cancel</Button> 
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
  pageTitle: {
    paddingTop: '2%',
    textDecoration: 'underline',
    fontWeight: 'bolder',
  },
  textArea: {
    minHeight: '150px',
  },
}


export default connect()(CreateLecture);