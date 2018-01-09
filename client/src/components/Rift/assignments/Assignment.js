import React, { Component } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Assignment extends Component {
  state = { assignment: [] };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/assignments/${id}`)
      .then(res => {
        this.setState({ assignment: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteQuiz = () => {
    window.confirm("Delete Assignment?")
    debugger
    axios.delete(`/api/assignments/${this.state.assignment.id}`)
      .then(res => {
        this.props.history.push('./')
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    const { id } = this.state.assignment
    return (
      <Segment basic>
        <Header textAlign='center'>{this.state.assignment.title}</Header>
        <Form>
          <Form.Group>
            {this.state.assignment.content}
          </Form.Group>
        </Form>
        <Button name='delete' onClick={() => this.assignment(id)}> Delete </Button>
        <Link to={'./CreateAssignment'} >
          <Button>Edit</Button>
        </Link>
        <Link to={'./'} >
          <Button>Cancel</Button>
        </Link>
      </Segment>
    )
  }
}

export default connect()(Assignment);
