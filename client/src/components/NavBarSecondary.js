import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  leftNavs = () => {
    // const { user, dispatch, history } = this.props;

    return (
      <Menu.Menu style={styles.navbarSecondary} position='left'>
        <Link to='/'>
          <Menu.Item name='@username' text='Username >'/>
        </Link>
        <Link to='/'>
          <Menu.Item name='@coursename' />
        </Link>
        <Link to='/'>
          <Menu.Item name='@section' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu style={styles.navbarSecondary} pointing secondary>
          { this.leftNavs() }
        </Menu>
      </div>
    );
  }
}

const styles = {
  navbarSecondary: {
    background: 'linear-gradient(#e0dfde, #cccbca)',
    border: 'none',
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
