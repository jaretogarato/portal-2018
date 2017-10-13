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
          <Menu.Menu position='right'>
            <Link to='/users'>
              <Menu.Item name='Users' />
            </Link>
            <Link to='/user_profile'>
              <Menu.Item name='Profile' />
            </Link>
            <Menu.Item
              name='Logout'
              onClick={() => dispatch(handleLogout(history))}
            />
          </Menu.Menu>
      );
      }
      return (
        <Menu.Menu position='right'>
           <Link to='/user_profile'>
            <Menu.Item name='Profile' />
          </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
