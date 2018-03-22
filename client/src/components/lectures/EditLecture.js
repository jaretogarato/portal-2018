import React, { Component } from 'react';
import {
  Form,
  Button,
  Container,
  Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { editLecture, getLecture } from '../../actions/lectures';
import { connect } from 'react-redux';
import { PageTitle } from '../../styles/styledComponents';
import { stateFromHTML } from 'draft-js-import-html'
import DraftEditor from '../editor/DraftEditor'

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

    contentChange = (content) => {
      this.setState({ content })
    }

    render() {
      const { title, content } = this.props.lecture
      return(
        <Container>
          <PageTitle>Update Lecture</PageTitle>
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
            <DraftEditor dValue={stateFromHTML(content)} onChange={this.handleChange} contentChange={this.contentChange} />
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
      );
    }
  }

  const styles = {
    form: {
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
