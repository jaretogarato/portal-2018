import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { setHeaders } from '../actions/headers';
import { Label, Table, Segment } from 'semantic-ui-react'


class PeopleHome extends React.Component {
  state = { users: [] }

  componentDidMount() {
    const { courseId } = this.props

    //TODO get people from course
    axios.get(`/api/course/${courseId}/users`)
      .then(res => {
        this.setState({ users: [...res.data] })
        console.log(res.data)
        this.props.dispatch(setHeaders(res.headers));
      }).then(err => {
        //handle error
        console.log(err)
    });
  }


  displayUsers = () => {
    return this.state.users.map(user => {
      return(
        <Table.Row key={user.id}>
          <Table.Cell>{`${user.first_name} ${user.last_name}`}</Table.Cell>
          <Table.Cell>{user.email}</Table.Cell>
          <Table.Cell>{user.nickname}</Table.Cell>
        </Table.Row>
      )
    });
  }

  render() {
    return (
      <Segment className='container'>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Nickname</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.displayUsers()}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

export default connect()(PeopleHome)
