import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import UserProfile from './UserProfile';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      if (user.is_admin) {
        return(
          <Menu.Menu style={styles.navbarPrimary} position='right'>
            <Menu.Item
              as={Link}
              to='/course_view'
              style={styles.navText}
              name="Course View"
            />
            <Menu.Item
              as={Link}
              to='/users'
              style={styles.navText}
              name="Users"
            />
            <Menu.Item
              as={Link}
              to='/user_profile'
              style={styles.navText}
              name="Profile"
            />
            <Menu.Item
              as={Link}
              to='/courses'
              style={styles.navText}
              name="Courses"
            />
            <Menu.Item
              name="Logout"
              style={styles.navText}
              onClick={() => dispatch(handleLogout(history))}
            />
          </Menu.Menu>
      );
      }
      return (
        <Menu.Menu style={styles.navbarPrimary} position='right'>
          <Menu.Item
            as={Link}
            to='/user_profile'
            style={styles.navText}
            name="Profile"
          />
          <Menu.Item
            style={styles.navText}
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu style={styles.navbarPrimary} position='right'>
        <Menu.Item
          as={Link}
          to='/register'
          style={styles.navText}
          name="Register"
        />
        <Menu.Item
          as={Link}
          to='/login'
          style={styles.navText}
          name="Login"
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
          />
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const styles = {
  navbarPrimary: {
    backgroundColor: '#00baed',
    border: 'none',
  },
  navText: {
    color: '#fff',
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
