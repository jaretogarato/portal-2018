import React, { Component } from 'react';
import { Form, Button, Container, Header, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { editLecture, getLecture } from '../../actions/lectures';
import { connect } from 'react-redux';


const submissionOptions = [
  { key: '1', text: 'PLACEHOLDER', value: '1' },
]

class EditLecture extends Component {
  state = { title: '', content: '' }
  
  componentDidMount() {
    const { id, title, content } = this.props.lecture
    this.props.dispatch(getLecture(id))
    this.setState({ title, content })
  }
  
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, content } = this.state
    this.props.dispatch(editLecture({ title, content }, this.props.lecture.id))
    this.props.toggleEdit();
  }
  
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
  
    render() {
      const { title, content } = this.props.lecture
      return(
        <Container>
          <Header as="h2" style={styles.pageTitle}>Update Lecture</Header>
            <Form onSubmit={this.handleSubmit} style={styles.form}>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Title'
                  name='title'
                  defaultValue={title}
                  width={9}
                  placeholder='Lecture Title'
                  autoFocus={true}
                  required
                  onChange={this.handleChange}>
                </Form.Input>
              </Form.Group> 
              <Form.TextArea
                name='content'
                defaultValue={content}
                style={ styles.textArea }
                label='Description'
                labelFontSize='1.3em'
                placeholder='Rift Text Editor Placeholder'
                required
                onChange={this.handleChange}
                />
              <Divider />
              <Form.Checkbox label='Published?' />
              <Divider />
              <Form.Group>
                <Button basic type='submit'>Update</Button>
              <Link to={`./`} >
                <Button basic>Cancel</Button>
              </Link>
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
    pageTitle: {
      paddingTop: '2%',
    },
    textArea: {
      minHeight: '150px',
      fontSize:'1.3em',
    },
  }
  
  const mapStateToProps = (state) => {
    return { lecture: state.lectures }
  }
  
  
  export default connect(mapStateToProps)(EditLecture);