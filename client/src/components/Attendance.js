import React from 'react';
import DatePicker from './DatePicker';
import UserSegment from './UserSegment';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';
import { Button, Container, Header } from 'semantic-ui-react';

class Attendance extends React.Component {
  
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getUsers());
  }

  displayUsers = () => {
    const { users } = this.props;
    return users.map( user => {
      return <UserSegment key={user.id} user={user} />
    })
  }

  submitAttendance = () => {
    const { dispatch, users } = this.props;
  }

  render() {
    return(
      <Container>
        <Header as='h1' textAlign='center'>Attendance</Header>
        <DatePicker />
        <Button basic onClick={this.submitAttendance}>
          Submit Attendance
        </Button>
        { this.displayUsers() }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Attendance);