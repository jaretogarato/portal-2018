import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Table, Segment } from 'semantic-ui-react';
import { getUsersByCourse } from '../../actions/users';


class PeopleHome extends React.Component {
  state = { usersByCourse: [], loaded: false }

  setUsersLoaded = () => this.setState({ loaded: true })

  componentDidMount() {
    const { courseId, dispatch } = this.props
    dispatch(getUsersByCourse(courseId, this.setUsersLoaded))
  }


  displayUsers = () => {
    return this.props.usersByCourse.map(user => {
      const fullName = `${user.first_name} ${user.last_name}`
      return(
        <Table.Row key={user.id}>
          <Table.Cell>
            <Link to={`/people/${user.id}/profile`}>
              {fullName}
            </Link>

          </Table.Cell>
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
            { this.state.loaded ? this.displayUsers() : null}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersByCourse: state.users,
  }
}

export default connect(mapStateToProps)(PeopleHome);
