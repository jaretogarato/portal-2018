import React, { Component } from 'react';
import { Header, Button, Segment, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

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

  deleteAssignment = () => {
    window.confirm("Delete Assignment?")
    axios.delete(`/api/assignments/${this.state.assignment.id}`)
      .then(res => {
        this.props.history.push('./')
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    const { title, id, content, due_date, created_at } = this.state.assignment
    let time = moment(due_date).format('MMMM D, YYYY')
    let created = moment(created_at).format('MMMM D, YYYY')
    return (
      <Segment name="assignment">
        <Header as='h1' textAlign='center' style={styles.pageTitle}>{title}</Header>
        <List>
          <List.Item>
            Description: {content}
          </List.Item>
          <List.Item>
            Created: {created}
          </List.Item>
          <List.Item>
            Due Date: {time}
          </List.Item>
        </List>
        <Button basic color='red' name='delete' onClick={() => this.deleteAssignment(id)}>Delete</Button>
        <Link to={'./'} >
          <Button basic color='yellow'>Cancel</Button>
        </Link>
      </Segment>
    );
  }
}

const styles = {
  pageTitle: {
    paddingTop: '2%',
    textDecoration: 'underline',
    fontWeight: 'bolder',
  },
}

export default Assignment;
