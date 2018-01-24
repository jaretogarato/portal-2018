import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { Header, Image, Menu, Segment, Dropdown } from 'semantic-ui-react';
import { handleLogout } from '../../actions/auth';





const styles = {
  image: {
    borderRadius: '50%',
    border: '1px solid white',
  },
  header: {
    marginTop: '0',
    fontWeight: '500',
    color: '#fff',
    padding: '18px 0 0 5px',
  },
  segment: {
    padding: '0',
  },
  dropdown: {
    marginTop: '20px',
  },
}


class UserAccount extends React.Component {

  trigger = () => (
    <Segment basic style={styles.segment}>
      <Menu.Item style={styles.segment}>
        <Image
          style={styles.image}
          src={this.props.user.image}
          size='mini'
          centered
        />
        <Header as='h5' style={styles.header} textAlign='center'>Account</Header>
      </Menu.Item>
    </Segment>
  )

  render() {
    const { user, dispatch } = this.props
    return(
      <Dropdown trigger={this.trigger()} pointing='top right' icon={null}>
        <Dropdown.Menu>
          <Dropdown.Item
            to={`/user_profile/${user.id}`}
            text='Profile'
            as={Link}
          />
          <Dropdown.Item
            to={`/user_profile/`}
            text='Settings'
            as={Link}
          />
          <Dropdown.Item
            text='Log out'
            name="Logout"
            style={styles.navText}
            onClick={() => dispatch(handleLogout(this.props.history))}
          />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(UserAccount));

