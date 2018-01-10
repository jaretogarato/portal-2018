import React, { Component } from 'react';
import { Header, Button, Segment, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

class Lecture extends Component {
  state = { lecture: [] };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/lectures/${id}`)
      .then(res => {
        this.setState({ lecture: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteLecture = () => {
    window.confirm("Delete Lecture?")
    axios.delete(`/api/lectures/${this.state.lecture.id}`)
      .then(res => {
        this.props.history.push('./')
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    const { title, id, content, due_date, created_at } = this.state.lecture
    let time = moment(due_date).format('MMMM D, YYYY')
    let created = moment(created_at).format('MMMM D, YYYY')
    return (
      <Segment basic name="lecture">
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
        <Button basic color='red' name='delete' onClick={() => this.deleteLecture(id)}>Delete</Button>
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

export default Lecture;
