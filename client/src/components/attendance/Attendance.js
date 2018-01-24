import React from 'react';
import DatePicker from './DatePicker';
import StudentRecord from './StudentRecord';
import { connect } from 'react-redux';
import { getUsersByCourse, markAllPresent, clearAllStatuses } from '../../actions/users';
import { addAttendance, getAttendance } from '../../actions/attendance';
import { Button, Container, Header, Icon, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { PageTitle } from '../../styles/styledComponents';

class Attendance extends React.Component {
  state = { submitted: false, users: [] }

  componentDidMount() {
    const { dispatch, currentDate, match: { params: { id }} } = this.props;
    if (currentDate)
      dispatch(getAttendance(id, currentDate, this.isSubmitted))
    dispatch(getUsersByCourse(id));
  }

  componentWillReceiveProps(nextProps) {
    const { users, dispatch, currentDate, match: { params: { id }} } = nextProps
    const { currentDate: date } = this.props
    if (date !== currentDate)
      dispatch(getAttendance(id, currentDate, this.isSubmitted))
    this.setState({ users })
  }

  isSubmitted = (data) => {
    if (data.length)
      this.setState({ submitted: true, users: data })
    else
      this.setState({ submitted: false, users: this.props.users })
  }

  displayUsers = () => {
    const { users, submitted } = this.state;
    return users.map( user => {
      if (user.role === 'student')
        return <StudentRecord submitted={submitted} key={user.id} user={user} status={user.status} />
      return null
    })
  }

  submitAttendance = () => {
    const { dispatch, users, currentDate, match: { params: { id } } } = this.props
    dispatch(addAttendance(id, users, currentDate))
    dispatch(clearAllStatuses())
    this.setState({ submitted: true }, () => {
      this.isSubmitted(users)
    })
  }

  allPresent = () => {
    this.props.dispatch(markAllPresent())
  }

  resetStatuses = () => {
    this.props.dispatch(clearAllStatuses())
  }

  allChosen = () => {
    const { users = [] } = this.props
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

  legend = () => (
    <div>
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
    </div>
  )

  render() {
    let { submitted, users } = this.state
    if (users.length)
      return(
        <Container>
          <PageTitle style={{textAlign: 'center'}}>Attendance</PageTitle>
          <DatePicker courseId={this.props.match.params.id}/>
          { this.legend() }
          { this.allChosen() }
          { !submitted &&
            [
              <Button basic key={1} onClick={this.allPresent}>
                Mark All Present
              </Button>,
              <Button basic key={2} onClick={this.resetStatuses}>
                Reset
              </Button>
            ]
          }
          <br/>
          <br/>
          { submitted && <Segment compact>Attendance Submitted</Segment>}
          { this.displayUsers() }
          <br/>
          { this.allChosen() }
        </Container>
      )
    else
      return(
        <Dimmer active style={styles.dimmer}>
          <Loader>Loading...</Loader>
        </Dimmer>
      )
  }
}

const styles = {
  dimmer: {
    height: '80vh'
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentDate: state.currentDate
  }
}

export default connect(mapStateToProps)(Attendance);
