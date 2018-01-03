import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {

  leftNavs = () => {
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
