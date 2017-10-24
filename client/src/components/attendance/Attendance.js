import React from 'react';
import DatePicker from './DatePicker';
import StudentRecord from './StudentRecord';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/users';
import { addAttendance, getAttendance } from '../../actions/attendance';
import { Button, Container, Header, Icon } from 'semantic-ui-react';

class Attendance extends React.Component {
  state = { courseId: 10 }

  componentDidMount() {
    const { dispatch, currentDate } = this.props;
    const { courseId } = this.state;
    dispatch(getUsers());
  }

  componentWillUpdate(nextProps, nextState) {
    const { currentDate, dispatch } = this.props;
    // when finished dispatch this action  
    // dispatch(getAttendance(this.state.courseId, nextProps.currentDate))
  }

  displayUsers = () => {
    const { users } = this.props;
    return users.map( user => {
      return <StudentRecord key={user.id} user={user} />
    })
  }

  submitAttendance = () => {
    const { dispatch, users, currentDate } = this.props;
    const { courseId } = this.state;
    // TODO: replace courseId with dynamic number
    dispatch(addAttendance(courseId, users, currentDate));
  }
  
  allPresent = () => {

  }
    
  render() {
    return(
      <Container>
        <Header as='h1' textAlign='center'>Attendance</Header>
        <DatePicker sendDate={this.sendDate} courseId={this.state.courseId}/>
        <Button basic onClick={this.submitAttendance}>
          Submit Attendance
        </Button>
        <Button basic onClick={this.allPresent}>
          <Icon name='check circle outline' color='green' />
          Mark All Present
        </Button>
        <br/>
        <br/>
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