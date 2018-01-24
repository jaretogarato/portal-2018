import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {
  Button,
  Icon,
  Image,
  Table,
  Segment,
  Form,
} from 'semantic-ui-react';
import { getUsersByCourse } from '../../actions/users';
import UserForm from '../users/UserForm';
import AddUsers from '../users/AddUsers';
import { isStaff } from '../../utils/permissions';
import missingAvatar from '../../assets/images/missing-avatar.png';
class PeopleHome extends React.Component {
  state = { loaded: false, modalOpen: false, view: 'all', filter: 'all' }
  setUsersLoaded = () => this.setState({ loaded: true })
  componentDidMount() {
    const { courseId, dispatch } = this.props
    dispatch(getUsersByCourse(courseId, this.setUsersLoaded))
  }
  setFilter = filter => this.setState({ filter })
  filterView = () => {
    let { filter } = this.state;
    let { usersByCourse } = this.props;
    return filter === 'all' ? usersByCourse : usersByCourse.filter( u => u.role === filter )
  }
  normalizeText = (role) => {
    if (role) {
      if (role === 'ta')
        return 'TA'
      else
        return `${role[0].toUpperCase()}${role.substring(1)}`
    } else {
      return null
    }
  }
  displayUsers = () => {
    const { courseId, usersByCourse } = this.props
    return this.filterView().map(user => {
      const fullName = `${user.first_name} ${user.last_name}`
      return(
        <Table.Row key={user.id}>
          <Table.Cell>
            <Image src={user.image || missingAvatar}
              size='mini'
              alt={`${fullName}'s profile picture'`}
              style={{display: 'inline'}}
            />
            <Link to={`/courses/${courseId}/user/${user.id}`}>
              {fullName}
            </Link>
          </Table.Cell>
          <Table.Cell>{user.email}</Table.Cell>
          <Table.Cell>{user.nickname}</Table.Cell>
          <Table.Cell>{this.normalizeText(user.role)}</Table.Cell>
        </Table.Row>
      )
    });
  }
  filterOptions = () => {
    return [
      'all',
      'student',
      'ta',
      'teacher',
      'auditor',
    ].map( role => {
      return { key: role, text: role, value: role }
    })
  }

  view = () => {
    let { view, filter } = this.state;
    let { permissions } = this.props;
    let permitted = isStaff(permissions) ? view : 'default';
    switch (permitted) {
      case 'add_user':
        return <UserForm />
      case 'add_users':
        return <AddUsers />
      default:
        return (
          <Table basic='very' striped singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Nickname</Table.HeaderCell>
                <Table.HeaderCell>
                  <Form.Select
                    label='Role: '
                    options={this.filterOptions()}
                    value={filter}
                    onChange={ (e, {value}) => this.setFilter(value) }
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              { this.state.loaded ? this.displayUsers() : null}
            </Table.Body>
          </Table>
        )
    }
  }
  buttons = () => {
    let { permissions } = this.props;
    let buttons = [];
    if (isStaff(permissions)) {
      buttons = [
        { name: 'All Users', selector: 'all', icon: 'users' },
        { name: 'Add User', selector: 'add_user', icon: 'add user' },
        { name: 'Add Users', selector: 'add_users', icon: 'file excel outline' },
      ]
    }
    return buttons.map( button =>
      <Button
        basic
        key={button.name}
        labelPosition="left"
        icon
        onClick={ () => this.setState({ view: button.selector }) }
      >
        <Icon name={button.icon} />
        { button.name }
      </Button>
    )
  }
  render() {
    return (
      <Segment basic className='container'>
        { this.buttons() }
        { this.view() }
      </Segment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    usersByCourse: state.users,
    permissions: state.permissions,
  }
}
export default connect(mapStateToProps)(PeopleHome);
