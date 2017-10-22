import React, { Component } from 'react';
import { Dropdown, Image, Label, Menu, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../../actions/auth';
import UserProfile from '../profile/UserProfile';
import Attendance from '../attendance/Attendance';
import PortalLogo from '../../assets/images/portal-logo.png';
import styled from 'styled-components';

class NavBarSecondary extends Component {
  state = { activeItem: 'Course View' }

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name })

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
              active={this.state.activeItem === 'Course View'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/attendance'
              style={styles.navText}
              name='Attendance'
              active={this.state.activeItem === 'Attendance'}
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
            <Dropdown item text='Admin' style={styles.navText }>
              <Dropdown.Menu style={styles.dropdown} >
                <Dropdown.Item
                  as={Link}
                  to='/courses'
                  style={styles.navSecondaryText}
                  name="Courses"
                  text="Courses"
                  active={this.state.activeItem === 'Courses'}
                  onClick={this.handleItemClick}
                />
                <Dropdown.Item
                  as={Link}
                  to='/users'
                  style={styles.navSecondaryText}
                  name="Users"
                  text="Users"
                  active={this.state.activeItem === 'Users'}
                  onClick={this.handleItemClick}
                />
              </Dropdown.Menu>
            </Dropdown>
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
            to='/course_view'
            style={styles.navText}
            name="Course View"
            active={this.state.activeItem === 'Course View'}
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
          active={this.state.activeItem === 'Register'}
          onClick={this.handleItemClick}
        />
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
  navbarPrimary: {
    background: 'linear-gradient(#00bef2, #00a6d4)',
    border: 'none',
  },
  navText: {
    color: '#fff',
  },
  dropdown: {
    backgroundColor: '#DDD',
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBarSecondary));
