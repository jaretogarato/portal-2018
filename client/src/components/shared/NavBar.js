import React from 'react';
import PortalLogo from '../../assets/images/portal-logo.png';
import { connect } from 'react-redux';
import { handleLogout } from '../../actions/auth';
import { getCoursesByStudent } from '../../actions/courses';
import { Link, withRouter } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
  state = { activeItem: 'Course View' };

  componentDidMount = () => {
    const { dispatch, user: { id } } = this.props;
    if(id)
    dispatch(getCoursesByStudent(id))
  }

  renderCourseSections = () => {
    const { userCourses } = this.props;
    return userCourses.map( course =>
      <Dropdown.Item
        key={course.id}
        as={Link}
        to={`/courses/${course.id}/course_view`}
        style={styles.navSecondaryText}
        name={course.course_type}
        text={course.course_type}
        active={this.state.activeItem === `${course.id}`}
        onClick={this.handleItemClick}
      />
    )
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  rightNavs = () => {
    const { user: { id, is_admin }, dispatch, history } = this.props;

    if (id) {
      if (is_admin) {
        return(
          <Menu.Menu style={styles.navbarPrimary} position='right'>
            <Menu.Item
              as={Link}
              to='/courses'
              style={styles.navText}
              name="Courses"
              active={this.state.activeItem === 'Courses'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/user_profile'
              style={styles.navText}
              name="Profile"
              active={this.state.activeItem === 'Profile'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/users'
              style={styles.navText}
              name="Users"
              text="Users"
              active={this.state.activeItem === 'Users'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Logout"
              style={styles.navText}
              onClick={() => dispatch(handleLogout(history))}
            />
          </Menu.Menu>
        );
      }

      return(
        <Menu.Menu style={styles.navbarPrimary} position='right'>
           <Dropdown item text='My Courses' style={styles.navText}>
            <Dropdown.Menu style={styles.dropdown}>
              { this.renderCourseSections() }
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            as={Link}
            to='/user_profile'
            style={styles.navText}
            name="Profile"
            active={this.state.activeItem === 'Profile'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            style={styles.navText}
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      )
    }

    return (
      <Menu.Menu style={styles.navbarPrimary} position='right'>
        <Menu.Item
          as={Link}
          to='/login'
          style={styles.navText}
          name="Login"
          active={this.state.activeItem === 'Login'}
          onClick={this.handleItemClick}
        />
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu style={styles.navbarPrimary} pointing secondary>
          <Menu.Item
            as={Link}
            to='/'
            style={styles.navText}
            name="Home"
            active={this.state.activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            <Image src={PortalLogo} height='60px' />
          </Menu.Item>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const styles = {
  dropdown: {
    backgroundColor: '#DDD',
    width: '21vw',
    overflow: 'auto',
  },
  navText: {
    color: '#fff',
  },
  navbarPrimary: {
    background: 'linear-gradient(#00bef2, #00a6d4)',
    border: 'none',
  }
}

const mapStateToProps = state => {
  return { user: state.user, userCourses: state.userCourses };
};

export default withRouter(connect(mapStateToProps)(NavBar));
