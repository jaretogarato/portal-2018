import React from 'react';
import DatePicker from './DatePicker';
import StudentRecord from './StudentRecord';
import { connect } from 'react-redux';
import { getUsersByCourse, markAllPresent } from '../../actions/users';
import { addAttendance, getAttendance } from '../../actions/attendance';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

class Attendance extends React.Component {
  state = { submitted: false }

  componentDidMount() {
    const { dispatch, currentDate, match: { params: { id }} } = this.props;
    if (currentDate)
      dispatch(getAttendance(id, currentDate, this.isSubmitted))
    dispatch(getUsersByCourse(id));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, currentDate, match: { params: { id }} } = nextProps
    const { currentDate: date } = this.props
    if (date !== currentDate)
      dispatch(getAttendance(id, currentDate, this.isSubmitted))
  }

  isSubmitted = (data) => {
    if (data.length)
      this.setState({ submitted: true })
    else
      this.setState({ submitted: false })
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
    return null
  }

  render() {
    let { submitted } = this.state
    return(
      <Container>
        <Header as='h1' textAlign='center'>Attendance</Header>
        <DatePicker courseId={this.props.match.params.id}/>
        <span>
          <Icon
            name='check circle outline'
            color='green'
          />
          Present
        </span>
        &nbsp;
        <span>
          <Icon
            name='remove circle outline'
            color='red'
          />
          Absent
        </span>
        &nbsp;
        <span>
          <Icon
            name='wait'
            color='orange'
          />
          Tardy
        </span>
        &nbsp;
        <span>
          <Icon
            name='remove circle outline'
            color='blue'
          />
          Excused
        </span>
        <br />
        { this.allChosen() }
        { !submitted &&
          <Button basic onClick={this.allPresent}>
            <Icon name='check circle outline' color='green' />
            Mark All Present
          </Button>
        }
        <br/>
        <br/>
        { !submitted && this.displayUsers() }
        { submitted && <Segment compact>Attendance Submitted</Segment>}
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
