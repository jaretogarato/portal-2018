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
            <Link to='/users'>
              <Menu.Item style={styles.navText} name='Users' />
            </Link>
            <Link to='/user_profile'>
              <Menu.Item style={styles.navText} name='Profile' />
            </Link>
            <Link to='/courses'>
              <Menu.Item name='Courses' />
            </Link>
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
           <Link to='/user_profile'>
            <Menu.Item style={styles.navText} name='Profile' />
          </Link>
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
        <Link to='/register'>
          <Menu.Item style={styles.navText} name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item style={styles.navText} name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu style={styles.navbarPrimary} pointing secondary>
          <Link to='/'>
            <Menu.Item style={styles.navText} name='home' />
          </Link>
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
