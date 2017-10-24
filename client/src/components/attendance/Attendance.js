import React from 'react';
import DatePicker from './DatePicker';
import StudentRecord from './StudentRecord';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/users';
import { addAttendance } from '../../actions/attendance';
import { Button, Container, Header } from 'semantic-ui-react';

class Attendance extends React.Component {
  
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getUsers());
  }

  displayUsers = () => {
    const { users } = this.props;
    return users.map( user => {
      return <StudentRecord key={user.id} user={user} />
    })
  }

  submitAttendance = () => {
    const { dispatch, users, currentDate } = this.props;
    // 20 is acting as course id
    dispatch(addAttendance(20, users, currentDate));
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
  return { 
    users: state.users, 
    currentDate: state.currentDate 
  }
}

export default connect(mapStateToProps)(Attendance);