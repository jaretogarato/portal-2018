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
          <Menu.Item name='Sample link 1' />
        </Link>
        <Link to='/'>
          <Menu.Item name='Sample link 2' />
        </Link>
        <Link to='/'>
          <Menu.Item name='Sample link 3' />
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
    backgroundColor: '#e0dfde',
    border: 'none',
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
