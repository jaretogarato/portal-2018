import React from 'react';
import DatePicker from './DatePicker';
import StudentRecord from './StudentRecord';
import { connect } from 'react-redux';
import { getUsersByCourse, markAllPresent } from '../../actions/users';
import { addAttendance } from '../../actions/attendance';
import { Button, Container, Header, Icon } from 'semantic-ui-react';

class Attendance extends React.Component {
  state = { submitted: false }

  componentDidMount() {
    const { dispatch, match: { params: { id }} } = this.props;
    dispatch(getUsersByCourse(id));
  }

  displayUsers = () => {
    const { users } = this.props;
    return users.map( user => {
      if (user.role === 'student')
        return <StudentRecord key={user.id} user={user} status={user.status} />
      return null
    })
  }

  submitAttendance = () => {
    const { dispatch, users, currentDate, match: { params: { id } } } = this.props;
    dispatch(addAttendance(id, users, currentDate));
    this.setState({ submitted: true })
  }

  allPresent = () => {
    this.props.dispatch(markAllPresent())
  }

  allChosen = () => {
    const { users } = this.props
    const { submitted } = this.state
    let finished = true
    users.forEach( user => {
      if(!user.status)
        finished = false
    })
    if(finished && !submitted)
      return(
        <Button basic onClick={this.submitAttendance}>
          Submit Attendance
        </Button>
      )
    else if (finished && submitted)
      return (
        <Button disabled>Attendence Submitted</Button>
      )
    return null
  }

  render() {
    return(
      <Container>
        <Header as='h1' textAlign='center'>Attendance</Header>
        <DatePicker sendDate={this.sendDate} courseId={this.props.match.params.id}/>
        { this.allChosen() }
          <Button basic onClick={this.allPresent}>
            <Icon name='check circle outline' color='green' />
            Mark All Present
          </Button>
        <br/>
        <br/>
        { this.displayUsers() }
        <br/>
        { this.allChosen() }
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
